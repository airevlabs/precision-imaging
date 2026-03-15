import { jsxs, jsx } from "react/jsx-runtime";
import React3, { Component, useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { StaticRouter } from "react-router";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Activity, Calendar, Search, Stethoscope, CheckCircle2, Info, Clock, FileBadge, ArrowRight } from "lucide-react";
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React3.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React3.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  instances = [];
  canUseDOM = isDocument;
  context;
  value = {
    setHelmet: (serverState) => {
      this.context.helmet = serverState;
    },
    helmetInstances: {
      get: () => this.canUseDOM ? instances : this.instances,
      add: (instance) => {
        (this.canUseDOM ? instances : this.instances).push(instance);
      },
      remove: (instance) => {
        const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
        (this.canUseDOM ? instances : this.instances).splice(index, 1);
      }
    }
  };
  constructor(context, canUseDOM) {
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React3.createContext(defaultValue);
var HelmetProvider = class _HelmetProvider extends Component {
  static canUseDOM = isDocument;
  helmetData;
  constructor(props) {
    super(props);
    this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React3.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
};
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  rendered = false;
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = class extends Component {
  static defaultProps = {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false
  };
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React3.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React3.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React3.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React3.createElement(HelmetDispatcher, { ...newProps, context }));
  }
};
const Logo = ({ animated = false, theme = "light" }) => {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#ffffff" : "var(--color-primary-navy)";
  const secondaryColor = isDark ? "var(--color-sky-blue)" : "var(--color-secondary-blue)";
  const gradientStart = isDark ? "#ebf8ff" : "#4299e1";
  const gradientEnd = isDark ? "#bee3f8" : "#2b6cb0";
  return /* @__PURE__ */ jsxs("div", { className: "logo-container", style: { display: "flex", alignItems: "center", gap: "0px" }, children: [
    /* @__PURE__ */ jsxs(
      motion.svg,
      {
        width: "80",
        height: "40",
        viewBox: "0 0 120 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        initial: "initial",
        whileHover: !animated ? "hover" : void 0,
        animate: animated ? "animate" : void 0,
        children: [
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M0 30H15L20 20L30 40L40 10L50 50L60 20L70 40L75 30H120",
              stroke: "url(#waveGradient)",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              variants: {
                initial: { pathLength: animated ? 0 : 1, opacity: animated ? 1 : 0.8 },
                hover: {
                  pathLength: [1, 0.95, 1],
                  opacity: 1,
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                },
                animate: {
                  pathLength: [0, 1],
                  opacity: 1,
                  transition: {
                    pathLength: { repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 0.5 }
                  }
                }
              }
            }
          ),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "waveGradient", x1: "0", y1: "30", x2: "120", y2: "30", gradientUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: gradientStart }),
            /* @__PURE__ */ jsx("stop", { offset: "75%", stopColor: gradientEnd, stopOpacity: "1" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: gradientEnd, stopOpacity: "0" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", lineHeight: "1", alignItems: "center", marginLeft: "-15px" }, children: [
      /* @__PURE__ */ jsx("span", { style: {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: primaryColor,
        letterSpacing: "-0.02em"
      }, children: "Precision" }),
      /* @__PURE__ */ jsx("span", { style: {
        fontSize: "1.2rem",
        fontWeight: "500",
        color: secondaryColor,
        marginTop: "-2px"
      }, children: "Imaging" })
    ] })
  ] });
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Ultrasound Services", to: "/#services" },
    { name: "Self-Pay Options", to: "/#self-pay" },
    { name: "What to Expect", to: "/#what-to-expect" },
    { name: "Why Choose Us", to: "/#why-choose-us" }
    // Book Now is handled separately as a button
  ];
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `header ${isScrolled ? "scrolled" : ""}`,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1e3,
        padding: isScrolled ? "0.75rem 0" : "1.5rem 0",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        boxShadow: isScrolled ? "var(--shadow-md)" : "none",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "var(--transition-smooth)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container", style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(Logo, { animated: true }) }),
          /* @__PURE__ */ jsx("nav", { className: "desktop-nav", style: { display: "none" }, children: /* @__PURE__ */ jsxs("ul", { style: { display: "flex", gap: "2rem", alignItems: "center" }, children: [
            navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: link.to,
                style: {
                  fontWeight: "600",
                  fontSize: "0.925rem",
                  color: "var(--color-primary-navy)",
                  position: "relative"
                },
                className: "nav-link",
                children: [
                  link.name,
                  /* @__PURE__ */ jsx("style", { children: `
                    .nav-link::after {
                      content: '';
                      position: absolute;
                      bottom: -4px;
                      left: 0;
                      width: 0;
                      height: 2px;
                      background-color: var(--color-secondary-blue);
                      transition: var(--transition-smooth);
                    }
                    .nav-link:hover::after {
                      width: 100%;
                    }
                  ` })
                ]
              }
            ) }, link.name)),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/booking",
                className: "btn btn-primary",
                style: {
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.9rem",
                  borderRadius: "9999px",
                  // Rounded full like pills
                  textDecoration: "none",
                  display: "inline-block"
                },
                children: "Book Now"
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "mobile-toggle",
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              style: {
                fontSize: "1.5rem",
                color: "var(--color-primary-navy)",
                zIndex: 1001
              },
              children: isMobileMenuOpen ? "✕" : "☰"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "var(--color-white)",
              padding: "2rem",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              zIndex: 999
            },
            children: [
              navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.to,
                  onClick: () => setIsMobileMenuOpen(false),
                  style: { fontWeight: "600", color: "var(--color-primary-navy)" },
                  children: link.name
                },
                link.name
              )),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/booking",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "btn btn-primary",
                  style: {
                    textAlign: "center",
                    padding: "0.75rem",
                    borderRadius: "0.5rem"
                  },
                  children: "Book Now"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      ` })
      ]
    }
  );
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { style: { backgroundColor: "var(--color-primary-navy)", color: "var(--color-white)", padding: "5rem 0 2rem" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "4rem", marginBottom: "4rem" }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { marginBottom: "1.5rem" }, children: /* @__PURE__ */ jsx(Logo, { theme: "dark" }) }),
          /* @__PURE__ */ jsx("p", { style: { opacity: 0.8, marginBottom: "1.5rem", fontSize: "0.95rem" }, children: "Professional diagnostic ultrasound services with transparent pricing and flexible scheduling." }),
          /* @__PURE__ */ jsx("p", { style: { fontWeight: "700", fontSize: "1.1rem", marginBottom: "0.5rem" }, children: "Phone: 630-344-9449" }),
          /* @__PURE__ */ jsxs("p", { style: { opacity: 0.8, fontSize: "0.95rem" }, children: [
            "4121 Fairview Ave, Suite L1",
            /* @__PURE__ */ jsx("br", {}),
            "Downers Grove, IL 60515"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--color-white)", fontWeight: "700" }, children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { style: { display: "flex", flexDirection: "column", gap: "0.75rem", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "footer-link", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#services", className: "footer-link", children: "Services" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#self-pay", className: "footer-link", children: "Self-Pay Options" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#contact", className: "footer-link", children: "Contact Us" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { style: { fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--color-white)", fontWeight: "700" }, children: "Patient Resources" }),
          /* @__PURE__ */ jsxs("ul", { style: { display: "flex", flexDirection: "column", gap: "0.75rem", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#what-to-expect", className: "footer-link", children: "What to Expect" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#why-choose-us", className: "footer-link", children: "Why Choose Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "footer-link", children: "Privacy Policy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/hipaa", className: "footer-link", children: "HIPAA Notice" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", className: "footer-link", children: "Terms & Conditions" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: {
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "2rem",
        textAlign: "center",
        fontSize: "0.85rem",
        opacity: 0.6
      }, children: [
        /* @__PURE__ */ jsx("p", { children: "© 2026 PRECISIONIMAGINGUSA LLC. All rights reserved. Professional medical imaging services provided by licensed specialists." }),
        /* @__PURE__ */ jsx("p", { style: { marginTop: "0.5rem" }, children: "This website is for informational purposes and does not constitute medical advice. Please consult with a healthcare professional for diagnosis or treatment." }),
        /* @__PURE__ */ jsxs("p", { style: { marginTop: "1.5rem", opacity: 0.8 }, children: [
          "Designed by ",
          /* @__PURE__ */ jsx("a", { href: "https://airevlabs.com", target: "_blank", rel: "noopener noreferrer", style: { fontWeight: "bold", color: "var(--color-white)", textDecoration: "underline" }, children: "AI REV LABS" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .footer-link:hover {
          color: var(--color-sky-blue);
          padding-left: 5px;
        }
      ` })
  ] });
};
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      onClick: scrollToTop,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      style: {
        position: "fixed",
        bottom: "6rem",
        right: "2rem",
        backgroundColor: "var(--color-primary-blue)",
        color: "var(--color-white)",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "var(--shadow-lg)",
        zIndex: 1e3
      },
      children: /* @__PURE__ */ jsx(ArrowUp, { size: 24 })
    }
  ) });
};
const FloatingContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { style: { position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1001 }, children: /* @__PURE__ */ jsx(
    motion.button,
    {
      onClick: handleClick,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      className: "floating-btn",
      style: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "var(--color-primary-blue)",
        color: "var(--color-white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-lg)",
        cursor: "pointer",
        border: "none"
      },
      children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("path", { d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M8 9H16", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M8 13H14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] })
    }
  ) });
};
const SSGLayout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "app", children: [
    /* @__PURE__ */ jsx(Header, {}),
    children,
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(BackToTop, {}),
    /* @__PURE__ */ jsx(FloatingContactForm, {}),
    /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: {
      __html: `
                (function() {
                    const initObserver = () => {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                                    entry.target.classList.add('opacity-100', 'translate-y-0');
                                    observer.unobserve(entry.target);
                                }
                            });
                        }, { threshold: 0.1 });
                        
                        document.querySelectorAll('.reveal-section').forEach((section) => {
                            observer.observe(section);
                        });
                    };

                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initObserver);
                    } else {
                        initObserver();
                    }
                })();
            `
    } })
  ] });
};
const AbdomenUltrasound = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal-section").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "!pt-32 lg:!pt-44 !pb-12 !bg-slate-50 !flex !flex-col !gap-8 sm:!gap-12 !font-sans", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Abdominal Ultrasound | Precision Imaging Diagnostic Center" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Safe abdominal sonogram imaging in Downers Grove. High-quality liver and gallbladder ultrasound serving the Chicago suburbs." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "abdominal ultrasound near me, abdominal sonogram Downers Grove, liver and gallbladder ultrasound Chicago suburbs" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: `
            {
              "@context": "https://schema.org",
              "@type": "MedicalService",
              "name": "Abdominal Ultrasound",
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Precision Imaging",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Downers Grove",
                  "addressRegion": "IL"
                }
              },
              "description": "Safe, non-invasive imaging of the liver, gallbladder, kidneys, and pancreas."
            }
          ` })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "reveal-section opacity-0 translate-y-8 !bg-slate-900 !rounded-3xl !mx-4 md:!mx-auto md:!max-w-7xl !px-6 !py-20 md:!py-28 lg:!py-32 !text-white !relative !overflow-hidden transition-all duration-700 shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "!absolute !inset-0 !opacity-10 !bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] !from-blue-400 !to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "!relative !z-10 !max-w-4xl !mx-auto !text-center flex flex-col items-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "!uppercase !tracking-wider !text-blue-300 !font-semibold !text-sm !mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Activity, { className: "!w-4 !h-4" }),
          " Diagnostic Ultrasound Center"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "!text-5xl md:!text-6xl lg:!text-7xl !font-bold !mb-8 !text-white leading-tight !tracking-tight", children: "Abdominal Ultrasound" }),
        /* @__PURE__ */ jsx("p", { className: "!text-xl md:!text-2xl !mb-10 max-w-3xl !text-slate-300 font-medium !leading-relaxed", children: "Safe, High‑Quality Sonography for the Liver, Gallbladder, Bile ducts, Pancreas, Spleen, Kidneys, and Abdominal aorta in Downers Grove and Chicago Suburbs." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "/#/booking", className: "!bg-blue-600 hover:!bg-blue-500 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 !text-white !text-lg", children: [
            "Book Appointment ",
            /* @__PURE__ */ jsx(Calendar, { className: "!ml-2 !w-5 !h-5" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/#contact", className: "!bg-transparent border-2 !border-slate-600 hover:!border-white hover:!bg-white/10 !px-8 !py-4 rounded-xl !font-semibold flex items-center justify-center transition hover:-translate-y-1 !text-white !text-lg", children: "Contact Us" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "center-overview", className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-4xl !mx-auto !text-center", children: [
      /* @__PURE__ */ jsx("h2", { id: "center-overview", className: "!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6", children: "Our Diagnostic Ultrasound Center" }),
      /* @__PURE__ */ jsxs("div", { className: "!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100", children: [
        /* @__PURE__ */ jsx("p", { className: "!text-lg md:!text-xl !text-slate-600 !leading-relaxed !mb-6", children: "Our outpatient diagnostic ultrasound center provides high‑quality abdominal imaging for patients and referring providers throughout the western Chicago suburbs." }),
        /* @__PURE__ */ jsx("p", { className: "!text-lg md:!text-xl !text-slate-600 !leading-relaxed", children: "Every exam is performed using modern equipment that produces clear, detailed images to help your provider answer specific clinical questions. These ultrasound studies use sound waves only—there is no radiation exposure." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "exam-options", className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-7xl !mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { id: "exam-options", className: "!text-3xl md:!text-4xl !font-bold !text-slate-900 !text-center !mb-12", children: "Available Exam Options" }),
      /* @__PURE__ */ jsx("p", { className: "!text-lg !text-slate-600 !text-center !mb-10 !max-w-3xl !mx-auto", children: "We offer the following exam options in this category so your provider can select the study that best matches your needs:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("article", { className: "!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600", children: /* @__PURE__ */ jsx(Search, { className: "!w-7 !h-7" }) }),
          /* @__PURE__ */ jsx("h3", { className: "!text-2xl !font-bold !text-slate-900 !mb-4", children: "Abdomen – Complete" }),
          /* @__PURE__ */ jsx("p", { className: "!text-slate-600 !leading-relaxed !flex-grow", children: "Comprehensive evaluation of the liver, gallbladder, bile ducts, pancreas, spleen, kidneys, and abdominal aorta for pain, abnormal labs, or follow‑up of prior imaging." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "!bg-blue-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-blue-600", children: /* @__PURE__ */ jsx(Activity, { className: "!w-7 !h-7" }) }),
          /* @__PURE__ */ jsx("h3", { className: "!text-2xl !font-bold !text-slate-900 !mb-4", children: "Abdomen – Limited" }),
          /* @__PURE__ */ jsx("p", { className: "!text-slate-600 !leading-relaxed !flex-grow", children: "Targeted upper‑abdominal exam focused on liver, gallbladder, bile ducts, and pancreas when symptoms or lab results point to these organs." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "!bg-white !rounded-3xl !p-8 !shadow-sm hover:!shadow-xl !border !border-slate-100 hover:!border-blue-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "!bg-rose-50 !w-14 !h-14 !rounded-2xl flex items-center justify-center !mb-6 text-rose-600", children: /* @__PURE__ */ jsx(Stethoscope, { className: "!w-7 !h-7" }) }),
          /* @__PURE__ */ jsx("h3", { className: "!text-2xl !font-bold !text-slate-900 !mb-4", children: "AAA Screening" }),
          /* @__PURE__ */ jsx("p", { className: "!text-slate-600 !leading-relaxed !flex-grow", children: "Focused screening of the abdominal aorta to measure its diameter and look for aneurysm or enlargement, often recommended for adults with vascular risk factors." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "what-it-shows", className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-5xl !mx-auto !bg-slate-900 !rounded-3xl !p-8 md:!p-12 !shadow-xl !text-white overflow-hidden relative", children: [
      /* @__PURE__ */ jsx("div", { className: "!absolute !bottom-0 !right-0 !opacity-5 pointer-events-none", children: /* @__PURE__ */ jsx(Activity, { className: "!w-96 !h-96" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { id: "what-it-shows", className: "!text-3xl md:!text-4xl !font-bold !text-white !mb-8", children: "What These Exams Show" }),
        /* @__PURE__ */ jsx("p", { className: "!text-lg !text-slate-100 !font-medium !mb-10 !leading-relaxed", children: "During your abdominal ultrasound, we evaluate multiple key indicators. Your provider uses these diagnostic ultrasound findings alongside your history, physical exam, and lab results to make an accurate diagnosis." }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-6 !h-6 !text-blue-300" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !mb-2 !text-white", children: "Organ Integrity" }),
              /* @__PURE__ */ jsx("p", { className: "!text-slate-100 !font-medium", children: "Size, shape, and texture of each abdominal organ to look for inflammation, fatty change, cirrhosis, cysts, or masses." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-6 !h-6 !text-blue-300" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !mb-2 !text-white", children: "Gallbladder & Ducts" }),
              /* @__PURE__ */ jsx("p", { className: "!text-slate-100 !font-medium", children: "Gallstones, gallbladder wall thickening, and bile‑duct dilation that might indicate blockage or infection." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-6 !h-6 !text-blue-300" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !mb-2 !text-white", children: "Pancreas & Kidneys" }),
              /* @__PURE__ */ jsx("p", { className: "!text-slate-100 !font-medium", children: "Pancreatic enlargement or mass, spleen size, kidney appearance, and any free fluid within the abdomen." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "!mt-1 !bg-white/20 !p-2 !rounded-lg h-fit", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-6 !h-6 !text-blue-300" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !mb-2 !text-white", children: "Aorta Screening" }),
              /* @__PURE__ */ jsx("p", { className: "!text-slate-100 !font-medium", children: "For AAA screening, aortic diameter and plaque to assess aneurysm risk." })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-7xl !mx-auto grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Info, { className: "!w-8 !h-8 !text-blue-600" }),
          " Preparation Instructions"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "!text-lg !text-slate-600 !mb-8", children: "To help your abdominal ultrasound produce the clearest images, please follow these guidelines:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-5 !mb-8", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-5 !h-5 !text-slate-700" }) }),
            /* @__PURE__ */ jsxs("span", { className: "!text-lg !text-slate-700", children: [
              "Do not eat or drink anything except small sips of water for ",
              /* @__PURE__ */ jsx("strong", { children: "6–8 hours" }),
              " before your appointment."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-5 !h-5 !text-slate-700" }) }),
            /* @__PURE__ */ jsx("span", { className: "!text-lg !text-slate-700", children: "Take essential medications with a small amount of water unless your provider gives different instructions." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "!bg-slate-100 !p-1.5 !rounded-full !mr-4 !mt-0.5", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "!w-5 !h-5 !text-slate-700" }) }),
            /* @__PURE__ */ jsx("span", { className: "!text-lg !text-slate-700", children: "Wear loose, two‑piece clothing so we can easily access your upper abdomen." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "!bg-blue-50 !border-l-4 !border-blue-600 !p-5 !rounded-r-xl", children: /* @__PURE__ */ jsxs("p", { className: "!text-blue-900 !font-medium !flex !items-center !gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "!w-5 !h-5" }),
          " Arrive 15 minutes early to complete registration."
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "!text-sm !text-slate-500 !mt-6 !italic", children: "If your appointment combines more than one ultrasound type, our scheduling team will review the best preparation plan with you." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "!bg-white !p-8 md:!p-12 !rounded-3xl !shadow-sm !border !border-slate-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "!text-3xl !font-bold !text-slate-900 !mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Activity, { className: "!w-8 !h-8 !text-blue-600" }),
          " What to Expect"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "!text-lg !text-slate-600 !mb-8", children: "Here is what a typical visit looks like at our diagnostic ultrasound center:" }),
        /* @__PURE__ */ jsxs("div", { className: "!flex !flex-col !gap-6 !border-l-2 !border-slate-200 !ml-4 !py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "!flex !gap-4 !items-start !-ml-[17px]", children: [
            /* @__PURE__ */ jsx("div", { className: "!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm", children: "1" }),
            /* @__PURE__ */ jsxs("div", { className: "!flex-1 !pt-0.5", children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !text-slate-900 !mb-2 !mt-0", children: "Preparation" }),
              /* @__PURE__ */ jsx("p", { className: "!text-slate-600 !leading-relaxed !m-0", children: "You will lie on a padded exam table while the technologist applies warm gel over your upper abdomen." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "!flex !gap-4 !items-start !-ml-[17px]", children: [
            /* @__PURE__ */ jsx("div", { className: "!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm", children: "2" }),
            /* @__PURE__ */ jsxs("div", { className: "!flex-1 !pt-0.5", children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !text-slate-900 !mb-2 !mt-0", children: "Imaging Process" }),
              /* @__PURE__ */ jsx("p", { className: "!text-slate-600 !leading-relaxed !m-0", children: "The transducer is moved in several directions to obtain real‑time images of each organ. You may be asked to hold your breath or change position briefly to improve visualization." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "!flex !gap-4 !items-start !-ml-[17px]", children: [
            /* @__PURE__ */ jsx("div", { className: "!w-8 !h-8 !rounded-full !bg-blue-600 !text-white !flex !items-center !justify-center !font-bold !flex-shrink-0 !border-4 !border-white !shadow-sm", children: "3" }),
            /* @__PURE__ */ jsxs("div", { className: "!flex-1 !pt-0.5", children: [
              /* @__PURE__ */ jsx("h4", { className: "!text-xl !font-bold !text-slate-900 !mb-2 !mt-0", children: "Duration" }),
              /* @__PURE__ */ jsxs("p", { className: "!text-slate-600 !leading-relaxed !m-0", children: [
                "Most abdominal ultrasound appointments take about ",
                /* @__PURE__ */ jsx("strong", { children: "20–30 minutes" }),
                "; add a few minutes if AAA screening is performed at the same visit."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "!text-sm !text-slate-500 !mt-6 !italic", children: "Throughout the exam you are welcome to ask questions; our technologist will let you know when each part of the study is complete." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "results", className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-7xl !mx-auto !bg-blue-50 !rounded-3xl !p-8 md:!p-12 border border-blue-100 flex flex-col md:flex-row items-center gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-1/3 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "!w-32 !h-32 !bg-white !rounded-full !shadow-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(FileBadge, { className: "!w-16 !h-16 !text-blue-600" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 !text-center md:!text-left", children: [
        /* @__PURE__ */ jsx("h2", { id: "results", className: "!text-3xl md:!text-4xl !font-bold !text-slate-900 !mb-6", children: "Results & Follow-up" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 !text-lg !text-slate-700 !mb-6", children: [
          /* @__PURE__ */ jsxs("li", { className: "!flex !items-start", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "!w-5 !h-5 !text-blue-500 !mr-3 !shrink-0 !mt-1" }),
            /* @__PURE__ */ jsx("span", { children: "If a doctor order is provided, a detailed report is sent directly to your ordering provider so they can review results and plan next steps." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "!flex !items-start", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "!w-5 !h-5 !text-blue-500 !mr-3 !shrink-0 !mt-1" }),
            /* @__PURE__ */ jsx("span", { children: "Your provider may recommend medication changes, additional testing, or follow‑up imaging based on the ultrasound findings." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "!text-lg !text-slate-700 !font-bold", children: "Disclaimer: If there is no doctor's order, images will be provided after the exam on a CD. In order to receive a radiology report, a doctor's order is required." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "faq", className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-4xl !mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { id: "faq", className: "!text-3xl md:!text-4xl !font-bold !text-center !text-slate-900 !mb-12", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "What is a sonogram? What is sonography?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: [
            /* @__PURE__ */ jsxs("p", { className: "!mb-3", children: [
              "A ",
              /* @__PURE__ */ jsx("strong", { children: "sonogram" }),
              " is the picture or moving image created during your exam."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "!mb-3", children: [
              /* @__PURE__ */ jsx("strong", { children: "Sonography" }),
              " is the medical imaging specialty that uses ultrasound to evaluate organs and tissues."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "A ",
              /* @__PURE__ */ jsx("strong", { children: "sonograph" }),
              " describes the ultrasound machine or the images it produces."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "Can this test replace a CT scan?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "In many cases abdominal ultrasound is the first‑line test because it is noninvasive and radiation‑free, but your provider may still recommend a CT or MRI for certain specific conditions if more detail is needed." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "Will an ultrasound see all gallstones?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: 'Ultrasound is very good at detecting gallstones, especially those in the gallbladder. However, very small stones or "sludge" can occasionally be difficult to see depending on position.' })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "How should I prepare for a complete abdominal ultrasound?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "You should fast (nothing to eat or drink except very small sips of water) for 6-8 hours before the exam. This reduces gas in the bowel and ensures your gallbladder is fully distended for better evaluation." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "How long does an abdominal ultrasound take?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "A complete abdominal ultrasound usually takes between 20 to 30 minutes, depending on the complexity of the study and how well the organs can be visualized." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "Is an abdominal ultrasound painful?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "No, the procedure is generally painless. You might feel mild pressure as the technologist moves the transducer over your abdomen, especially if that area is already tender." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "Can I take my medications before the exam?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "Yes, you may take essential medications with a small sip of water prior to your exam, unless instructed otherwise by your physician." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "When will I receive the results of my ultrasound?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "A specialized radiologist will interpret the images and send the final report to your referring physician within 24 to 48 hours. Your physician will then review the findings with you." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "Do I need a doctor's order for an abdominal ultrasound?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "In general, to receive a formal radiologist diagnostic report, a prescription or order from your referring doctor is required. Check our self-pay and booking options for specifics on providing orders." })
        ] }),
        /* @__PURE__ */ jsxs("details", { className: "!bg-white !rounded-2xl !p-6 !shadow-sm !border !border-slate-200 group cursor-pointer !transition-shadow hover:!shadow-md", children: [
          /* @__PURE__ */ jsxs("summary", { className: "!text-xl !font-bold !text-slate-900 !flex !justify-between !items-center !list-none", children: [
            "What is an AAA screening and who needs it?",
            /* @__PURE__ */ jsx("span", { className: "transition-transform group-open:rotate-180", children: /* @__PURE__ */ jsx(ChevronDownIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "!mt-4 !pt-4 !border-t !border-slate-100 !text-slate-600 !text-lg !leading-relaxed", children: "An AAA (Abdominal Aortic Aneurysm) screening targets the main blood vessel in the abdomen to ensure there is no swelling or aneurysm. It is highly recommended for older adults with vascular risk factors or a history of smoking." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "service-area", className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6 !py-8", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-5xl !mx-auto !text-center", children: [
      /* @__PURE__ */ jsx("h2", { id: "service-area", className: "sr-only", children: "Local Service Area" }),
      /* @__PURE__ */ jsxs("p", { className: "!text-xs md:!text-sm !text-slate-400 !leading-relaxed inline-block", children: [
        /* @__PURE__ */ jsx("strong", { children: "Proudly serving patients in:" }),
        " Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "reveal-section opacity-0 translate-y-8 transition-all duration-700 ease-out !px-6", children: /* @__PURE__ */ jsxs("div", { className: "!max-w-7xl !mx-auto !bg-slate-900 !rounded-3xl !p-10 md:!p-16 !text-center shadow-xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "!text-3xl md:!text-4xl !font-bold !text-white !mb-6", children: "Ready to schedule your abdomen ultrasound?" }),
      /* @__PURE__ */ jsxs("p", { className: "!text-xl !text-slate-300 !mb-10 !max-w-3xl !mx-auto", children: [
        "Use our online scheduling page or click ",
        /* @__PURE__ */ jsx("strong", { children: "Contact Us" }),
        " on the website to request an appointment. Our team is happy to answer questions and help you select the most appropriate exam option listed above."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center items-center", children: [
        /* @__PURE__ */ jsxs("a", { href: "/#/booking", className: "!bg-blue-600 hover:!bg-blue-500 !text-white !px-10 !py-5 rounded-xl !font-bold !text-xl flex items-center transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center", children: [
          "Book Appointment ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "!ml-3 !w-6 !h-6" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/#contact", className: "!bg-slate-800 hover:!bg-slate-700 !text-white !border !border-slate-600 hover:!border-slate-400 !px-10 !py-5 rounded-xl !font-bold !text-xl transition hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center flex items-center", children: "Contact Us" })
      ] })
    ] }) })
  ] });
};
const ChevronDownIcon = () => /* @__PURE__ */ jsx("svg", { className: "!w-6 !h-6 !text-blue-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) });
const routes = {
  "/services/abdomen-ultrasound": AbdomenUltrasound
};
function render(url, helmetContext) {
  const Component2 = routes[url];
  if (!Component2) return "";
  const html = renderToString(
    /* @__PURE__ */ jsx(React3.StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(SSGLayout, { children: /* @__PURE__ */ jsx(Component2, {}) }) }) }) })
  );
  return html;
}
export {
  render
};
