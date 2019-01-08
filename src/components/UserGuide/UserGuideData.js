import React from 'react';

export const userGuideData = {
  page1: {
    content:
      <div className="userguide-page-1">
        <p>This is UserGuide Page 1</p>
      </div>,
    prev: null,
    next: 'page2'
  },
  page2: {
    content:
      <div className="userguide-page-2">
        <p>This is UserGuide Page 2</p>
      </div>,
    prev: 'page1',
    next: 'page3'
  },
  page3: {
    content:
      <div className="userguide-page-3">
        <p>This is UserGuide Page 3</p>
      </div>,
    prev: 'page2',
    next: null
  }
};