import { jsxs, jsx } from "react/jsx-runtime";
import React3, { Component, useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { StaticRouter } from "react-router";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Calendar, Activity, CheckCircle2, Heart, FileText, Clock, ArrowRight } from "lucide-react";
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
    /* @__PURE__ */ jsx(FloatingContactForm, {})
  ] });
};
const AbdomenUltrasound = () => {
  const fadeUpProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  return /* @__PURE__ */ jsxs("div", { className: "pt-24 lg:pt-32", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Abdominal Ultrasound Downers Grove | Precision Imaging" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Safe ultrasound imaging of liver, gallbladder, kidneys, pancreas & more in Downers Grove. Transparent pricing, fast scheduling." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "abdominal ultrasound near me, abdominal scan Downers Grove, liver ultrasound Chicago suburbs" }),
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
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "bg-blue-900 text-white py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Abdominal Ultrasound Downers Grove | Precision Imaging" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl mb-4 max-w-3xl", children: "Safe imaging of liver, gallbladder, kidneys, pancreas & more" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-200 mb-8 max-w-2xl", children: "Transparent pricing. Fast scheduling. Results to your doctor." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "/#/booking", className: "bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition hover:-translate-y-1 hover:shadow-lg", children: [
          "Book Abdominal Ultrasound ",
          /* @__PURE__ */ jsx(Calendar, { className: "ml-2 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition hover:-translate-y-1", children: "Contact Us" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "py-16 bg-gray-50 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "hover:transform hover:translate-x-2 transition-transform duration-300", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsx(Activity, { className: "w-8 h-8 text-blue-600 mr-3" }),
          "What Does an Abdominal Ultrasound Examine?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 text-lg", children: "Noninvasive sound waves create clear images without radiation, allowing us to safely examine:" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["Liver", "Gallbladder", "Pancreas", "Spleen", "Kidneys", "Aorta", "Appendix"].map((organ, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-700 hover:text-blue-600 transition-colors", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-500 mr-3 shrink-0" }),
          " ",
          organ
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hover:transform hover:translate-x-2 transition-transform duration-300", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 text-red-500 mr-3" }),
          "Common Conditions Detected"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 text-lg", children: "Early detection allows for timely treatment. We commonly screen for:" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["Gallstones", "Kidney stones", "Cysts", "Tumors", "Aneurysms", "Fluid collections", "Appendicitis"].map((condition, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-700 hover:text-blue-600 transition-colors", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-blue-500 mr-3 shrink-0" }),
          " ",
          condition
        ] }, idx)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "py-16 bg-white px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-8 rounded-2xl hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-blue-900 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 mr-3 text-blue-600" }),
          " How to Prepare"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 mb-6", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" }),
            " Fast 6-8 hours before exam"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" }),
            " Water OK after 2 hours fasting"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" }),
            " Wear loose clothing"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" }),
            " No lotions on abdomen"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-blue-800 bg-blue-100 p-3 rounded-lg inline-block", children: "Please arrive 15 mins early." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-gray-900 mb-6 flex items-center", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 mr-3 text-blue-600" }),
          " What Happens During Exam"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 1:" }),
            " Gel is applied to the skin."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 2:" }),
            " Transducer smoothly moved over abdomen."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 3:" }),
            " High-resolution images are captured."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 4:" }),
            " Quick clean up and you're done."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm", children: "Duration: 20-45 mins" }),
          /* @__PURE__ */ jsx("span", { className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm", children: "Painless / Mild Pressure" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "py-16 bg-blue-900 text-white px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-12", children: "Why Get Your Abdominal Ultrasound Here" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/50 p-6 rounded-xl text-center hover:bg-blue-800 transition-colors hover:-translate-y-2 duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-2", children: "Transparent Pricing" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "No hidden fees, simple self-pay rates." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/50 p-6 rounded-xl text-center hover:bg-blue-800 transition-colors hover:-translate-y-2 duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Activity, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-2", children: "Modern Equipment" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "Latest portable ultrasound technology." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/50 p-6 rounded-xl text-center hover:bg-blue-800 transition-colors hover:-translate-y-2 duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-2", children: "Fast Scheduling" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "Appointments available when you need them." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/50 p-6 rounded-xl text-center hover:bg-blue-800 transition-colors hover:-translate-y-2 duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-2", children: "Direct Results" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "Sent directly to your referring doctor." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "py-16 bg-gray-50 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-gray-900 mb-10", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 mb-2", children: "Do I need to fast?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Yes, please fast for 6-8 hours prior to your exam. Water is OK after 2 hours of fasting." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 mb-2", children: "How long does it take?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "The entire process typically takes between 20 to 45 minutes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 mb-2", children: "Is it safe and painful?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Ultrasounds are incredibly safe, using zero radiation. It is generally painless, though you may feel mild pressure." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 mb-2", children: "When will I get results?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Results are typically sent directly to your doctor on the same day as your exam." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg text-gray-900 mb-2", children: "Do I need a referral?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "A referral is not necessary if you are paying out of pocket (self-pay), but it is required if you are billing through insurance." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "py-12 bg-white border-t border-gray-200 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Local Service Area" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto", children: "Serving Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg." })
    ] }) }),
    /* @__PURE__ */ jsx(motion.section, { ...fadeUpProps, className: "py-16 bg-gray-50 px-6 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Ready to Schedule?" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8", children: [
        /* @__PURE__ */ jsxs("a", { href: "/#/booking", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center transition hover:-translate-y-1 hover:shadow-lg", children: [
          "Book Appointment ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition hover:-translate-y-1", children: "Contact Us" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-gray-500 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mr-1" }),
          " Licensed Providers"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mr-1" }),
          " HIPAA Compliant"
        ] })
      ] })
    ] }) })
  ] });
};
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
