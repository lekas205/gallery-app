interface GalleryRoutesStructure {
  name: string;
  path: string;
  title?: string;
}

export interface galleryRouteLayout {
  home: {
    root: GalleryRoutesStructure;
  };
}
