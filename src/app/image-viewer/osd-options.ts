export class OsdOptions {

  element?: any;
  tileSources?: Array<string | Function | any> | string | Function | any;
  tabIndex?: number;
  overlays?: any[];
  xmlPath?: string;
  prefixUrl?: string;
  navImages?: any; // OpenSeadragon.NavImages;
  debugMode?: boolean;
  debugGridColor?: string[];
  blendTime?: number;
  alwaysBlend?: boolean;
  autoHideControl?: boolean;
  immediateRender?: boolean;
  defaultZoomLevel?: number;
  opacity?: number;
  preload?: boolean;
  compositeOperation?: string;
  placeholderFillStyle?: string | CanvasGradient | CanvasPattern | Function;
  degrees?: number;
  minZoomLevel?: number;
  maxZoomLevel?: number;
  homeFillsViewer?: boolean;
  panHorizontal?: boolean;
  panVertical?: boolean;
  constrainDuringPan?: boolean;
  wrapHorizontal?: boolean;
  wrapVertical?: boolean;
  minZoomImageRatio?: number;
  maxZoomPixelRatio?: number;
  smoothTileEdgesMinZoom?: number;
  iOSDevice?: boolean;
  autoResize?: boolean;
  preserveImageSizeOnResize?: boolean;
  minScrollDeltaTime?: number;
  pixelsPerWheelLine?: number;
  visibilityRatio?: number;
  viewportMargins?: any;
  imageLoaderLimit?: number;
  clickTimeThreshold?: number;
  clickDistThreshold?: number;
  dblClickTimeThreshold?: number;
  dblClickDistThreshold?: number;
  springStiffness?: number;
  animationTime?: number;
  gestureSettingsMouse?: any; // OpenSeadragon.GestureSettings;
  gestureSettingsTouch?: any; // OpenSeadragon.GestureSettings;
  gestureSettingsPen?: any; // OpenSeadragon.GestureSettings;
  gestureSettingsUnknown?: any; // OpenSeadragon.GestureSettings;
  zoomPerClick?: number;
  zoomPerScroll?: number;
  zoomPerSecond?: number;
  showNavigator?: boolean;
  navigatorId?: string;
  navigatorPosition?: string;
  navigatorSizeRatio?: number;
  navigatorMaintainSizeRatio?: boolean;
  navigatorTop?: number | string;
  navigatorLeft?: number | string;
  navigatorHeight?: number | string;
  navigatorWidth?: number | string;
  navigatorAutoResize?: boolean;
  navigatorAutoFade?: boolean;
  navigatorRotate?: boolean;
  controlsFadeDelay?: number;
  controlsFadeLength?: number;
  maxImageCacheCount?: number;
  timeout?: number;
  useCanvas?: boolean;
  minPixelRatio?: number;
  mouseNavEnabled?: boolean;
  showNavigationControl?: boolean;
  navigationControlAnchor?: any; // OpenSeadragon.ControlAnchor;
  showZoomControl?: boolean;
  showHomeControl?: boolean;
  showFullPageControl?: boolean;
  showRotationControl?: boolean;
  showSequenceControl?: boolean;
  sequenceControlAnchor?: any; // OpenSeadragon.ControlAnchor;
  navPrevNextWrap?: boolean;
  zoomInButton?: string;
  zoomOutButton?: string;
  homeButton?: string;
  fullPageButton?: string;
  rotateRightButton?: string;
  previousButton?: string;
  nextButton?: string;
  sequenceMode?: boolean;
  initialPage?: number;
  preserveViewport?: boolean;
  preserveOverlays?: boolean;
  showReferenceStrip?: boolean;
  referenceStripScroll?: string;
  referenceStripElement?: Element;
  referenceStripHeight?: number;
  referenceStripWidth?: number;
  referenceStripPosition?: string;
  referenceStripSizeRatio?: number;
  collectionMode?: boolean;
  collectionRows?: number;
  collectionColumns?: number;
  collectionLayout?: string;
  collectionTileSize?: number;
  collectionTileMargin?: number;
  crossOriginPolicy?: string | boolean;
  ajaxWithCredentials?: boolean;
  loadTilesWithAjax?: boolean;
  ajaxHeaders?: any;

}