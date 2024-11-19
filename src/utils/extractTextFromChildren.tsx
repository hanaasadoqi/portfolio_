import React from "react";

function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return str;
}

const idMap = new Map<string, number>()

function createIdFromText(text: string): string {
  const baseId = text.toLowerCase().replace(/\s+/g, '-')
  const idCount = idMap.get(baseId) || 0
  const uniqueId = idCount > 0 ? `${baseId}-${idCount}` : baseId
  idMap.set(baseId, idCount + 1)
  return slugify(uniqueId)
}


const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  }

  if (React.isValidElement(children) && children.props.children) {
    return extractTextFromChildren(children.props.children);
  }

  if (Array.isArray(children)) {
    return children.map(child => extractTextFromChildren(child)).join('');
  }

  return '';
};

export {
  createIdFromText,
  extractTextFromChildren
}