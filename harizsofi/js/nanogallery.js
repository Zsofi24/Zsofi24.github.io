$(document).ready(function () {

    $("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  200,
        thumbnailWidth:   "auto",
        // itemsBaseURL:     'https://nanogallery2.nanostudio.org/samples/',
        
        // ### gallery content ### 
        items: [
            { src: 'img/gallery/forest1.jpg', srct: 'img/gallery/t/forest1-t.jpg'},
            { src: 'img/gallery/forest2.jpg', srct: 'img/gallery/t/forest2-t.jpg'},
            { src: 'img/gallery/forest3.jpg', srct: 'img/gallery//t/forest3-t.jpg'},
            { src: 'img/gallery/forest4.jpg', srct: 'img/gallery//t/forest4-t.jpg'},
            { src: 'img/gallery/forest5.jpg', srct: 'img/gallery//t/forest5-t.jpg'},
            { src: 'img/gallery/forest6.jpg', srct: 'img/gallery//t/forest6-t.jpg'},
            { src: 'img/gallery/forest7.jpg', srct: 'img/gallery//t/forest7-t.jpg'},
            { src: 'img/gallery/place1.jpg', srct: 'img/gallery/t/place1-t.jpg'},
            { src: 'img/gallery/place2.jpg', srct: 'img/gallery/t/place2-t.jpg'},
            { src: 'img/gallery/place3.jpg', srct: 'img/gallery/t/place3-t.jpg'},
            { src: 'img/gallery/plant1.jpg', srct: 'img/gallery/t/plant1-t.jpg'},
            { src: 'img/gallery/plant2.jpg', srct: 'img/gallery/t/plant2-t.jpg'},
            { src: 'img/gallery/plant3.jpg', srct: 'img/gallery/t/plant3-t.jpg'},
            { src: 'img/gallery/plant4.jpg', srct: 'img/gallery/t/plant4-t.jpg'},
            { src: 'img/gallery/plant5.jpg', srct: 'img/gallery/t/plant5-t.jpg'},
            { src: 'img/gallery/plant6.jpg', srct: 'img/gallery/t/plant6-t.jpg'},
            { src: 'img/gallery/plant7.jpg', srct: 'img/gallery/t/plant7-t.jpg'},
            { src: 'img/gallery/storm.jpg', srct: 'img/gallery/t/storm-t.jpg'},
            { src: 'img/gallery/bread.jpg', srct: 'img/gallery/t/bread-t.jpg'},
            { src: 'img/gallery/bread3.jpg', srct: 'img/gallery/t/bread3-t.jpg'},
            { src: 'img/gallery/bread4.jpg', srct: 'img/gallery/t/bread4-t.jpg'},
            { src: 'img/gallery/bread5.jpg', srct: 'img/gallery/t/bread5-t.jpg'},
            { src: 'img/gallery/bread6.jpg', srct: 'img/gallery/t/bread6-t.jpg'},
            { src: 'img/gallery/gold.jpg', srct: 'img/gallery/t/gold-t.jpg'},
            { src: 'img/gallery/new.jpg', srct: 'img/gallery/t/new-t.jpg'},
            { src: 'img/gallery/sun-leaf.jpg', srct: 'img/gallery/t/sun-leaf-t.jpg'},
            { src: 'img/gallery/sun.jpg', srct: 'img/gallery/t/sun-t.jpg'},
            { src: 'img/gallery/white.jpg', srct: 'img/gallery/t/white-t.jpg'},
      ],
      
      galleryDisplayMode: 'pagination',                 // gallery pagination mode
      galleryMaxRows: 3,                                // gallery with max 3 rows
      gallerySorting: 'random',
    //   galleryLastRowFull: true,
      thumbnailAlignment: 'fillWidth',
      thumbnailL1GutterWidth: 20,
      thumbnailL1GutterHeight: 20,
      thumbnailBorderHorizontal: 3,
    
      thumbnailBorderVertical: 3,

      // THUMBNAIL TOOLS & LABEL
      thumbnailL1Label: { display: true, position:'overImageOnTop', hideIcons: true, titleFontSize: '1.5em', align: 'left'},
      thumbnailToolbarImage :  { topLeft: 'select'},

      // DISPLAY ANIMATION
      thumbnailDisplayTransition: 'scaleUp',       // thumbnail display animation
      thumbnailDisplayTransitionDuration: 400,
      thumbnailDisplayInterval: 200,
      thumbnailDisplayOrder: 'rowByRow',

      // THUMBNAIL'S HOVER ANIMATION
      thumbnailHoverEffect2: 'toolsSlideUp|labelSlideDown|imageGrayOff|borderLighter|imageScaleIn80',
      touchAnimation: true,
      touchAutoOpenDelay: -1,

      // GALLERY THEME
      galleryTheme : { 
        thumbnail: { titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#fff' },
        navigationPagination :  { background: '#3C4B5B', color: '#fff', colorHover: '#aaa', borderRadius: '4px' },
      },
      thumbnailDisplayOutsideScreen: false,
      
            
      // callback to customize the content of the media info popup
      fnPopupMediaInfo: my_popup_info,
      
      // DEEP LINKING
      locationHash: false
    });
    
    // Function called before the popup for media info is displayed
    // Content and title can be changed
    function my_popup_info(item, title, content){
      var my_title = title + ' <b>nanogallery2</b>';
      var my_content = content + '<br><br>[The content of this popup can be customized with some javascript.]';
      return {title: my_title, content: my_content};
    }
  })