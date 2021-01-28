var keywords = ['<!--...-->', '<!DOCTYPE>', '<a>', '<abbr>', '<acronym>', '<address>', '<applet>', '<area>', '<article>', '<aside>', '<audio>', '<b>', '<base>', '<basefont>', '<bdi>', '<bdo>', '<big>', '<blockquote>', '<body>', '<br>', '<button>', '<canvas>', '<caption>', '<center>', '<cite>', '<code>', '<col>', '<colgroup>', '<data>', '<datalist>', '<dd>', '<del>', '<details>', '<dfn>', '<dialog>', '<dir>', '<div>', '<dl>', '<dt>', '<em>', '<embed>', '<fieldset>', '<figcaption>', '<figure>', '<font>', '<footer>', '<form>', '<frame>', '<frameset>', '<h1>', '<head>', '<header>', '<hr>', '<html>', '<i>', '<iframe>', '<img>', '<input>', '<ins>', '<kbd>', '<label>', '<legend>', '<li>', '<link>', '<main>', '<map>', '<mark>', '<meta>', '<meter>', '<nav>', '<noframes>', '<noscript>', '<object>', '<ol>', '<optgroup>', '<option>', '<output>', '<p>', '<param>', '<picture>', '<pre>', '<progress>', '<q>', '<rp>', '<rt>', '<ruby>', '<s>', '<samp>', '<script>', '<section>', '<select>', '<small>', '<source>', '<span>', '<strike>', '<strong>', '<style>', '<sub>', '<summary>', '<sup>', '<svg>', '<table>', '<tbody>', '<td>', '<template>', '<textarea>', '<tfoot>', '<th>', '<thead>', '<time>', '<title>', '<tr>', '<track>', '<tt>', '<u>', '<ul>', '<var>', '<video>', '<wbr>', '+', '-', '*', '/', '%', '++', '--', '==', '===', '!=', '!==', '>', '<', '>=', '<=', '&&', '||', '!', 'align-content', 'align-items', 'align-self', 'all', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'backface-visibility', 'background', 'background-attachment', 'background-blend-mode', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'caret-color', '@charset', 'clear', 'clip', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', '@font-face', 'font-family', 'font-feature-settings', '@font-feature-values', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-synthesis', 'font-variant', 'font-variant-alternates', 'font-variant-caps', 'font-variant-east-asian', 'font-variant-ligatures', 'font-variant-numeric', 'font-variant-position', 'font-weight', 'grid', 'grid-area', 'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows', 'grid-column', 'grid-column-end', 'grid-column-gap', 'grid-column-start', 'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap', 'grid-row-start', 'grid-template', 'grid-template-areas', 'grid-template-columns', 'grid-template-rows', 'hanging-punctuation', 'height', 'hyphens', 'image-rendering', '@import', 'isolation', 'justify-content', '@keyframes', 'left', 'letter-spacing', 'line-break', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'mask', 'mask-type', 'max-height', 'max-width', '@media', 'min-height', 'min-width', 'mix-blend-mode', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'scroll-behavior', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-combine-upright', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-justify', 'text-orientation', 'text-overflow', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'user-select', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'writing-mode', 'z-index']
var html = `<h2>This site will show you how to use HTML/CSS/JS to make your own website!</h2>
<div id="html">
    <br><br><br>
<h3>HTML</h3>
<h4>HTML is built up with tags. Tags start with &lt; and end with &gt;</h4>
<p>&lt;!--...--&gt; Defines a comment</p>
<p>&lt;!DOCTYPE&gt;  Defines the document type</p>
<p>&lt;a&gt; Defines a hyperlink</p>
<p>&lt;abbr&gt; Defines an abbreviation or an acronym</p>
<p>&lt;acronym&gt; Not supported in HTML5. Use &lt;abbr&gt; instead.</p>
<p>Defines an acronym</p>
<p>&lt;address&gt; Defines contact information for the author/owner of a document</p>
<p>&lt;applet&gt; Not supported in HTML5. Use &lt;embed&gt; or &lt;object&gt; instead.</p>
<p>Defines an embedded applet</p>
<p>&lt;area&gt; Defines an area inside an image map</p>
<p>&lt;article&gt; Defines an article</p>
<p>&lt;aside&gt; Defines content aside from the page content</p>
<p>&lt;audio&gt; Defines embedded sound content</p>
<p>&lt;b&gt; Defines bold text</p>
<p>&lt;base&gt; Specifies the base URL/target for all relative URLs in a document</p>
<p>&lt;basefont&gt; Not supported in HTML5. Use CSS instead.</p>
<p>Specifies a default colour, size, and font for all text in a document</p>
<p>&lt;bdi&gt; Isolates a part of text that might be formatted in a different direction from other text outside it</p>
<p>&lt;bdo&gt; Overrides the current text direction</p>
<p>&lt;big&gt; Not supported in HTML5. Use CSS instead.</p>
<p>Defines big text</p>
<p>&lt;blockquote&gt; Defines a section that is quoted from another source</p>
<p>&lt;body&gt; Defines the document's body</p>
<p>&lt;br&gt; Defines a single line break</p>
<p>&lt;button&gt; Defines a clickable button</p>
<p>&lt;canvas&gt; Used to draw graphics, on the fly, via scripting (usually JavaScript)</p>
<p>&lt;caption&gt; Defines a table caption</p>
<p>&lt;center&gt; Not supported in HTML5. Use CSS instead.</p>
<p>Defines centred text</p>
<p>&lt;cite&gt; Defines the title of a work</p>
<p>&lt;code&gt; Defines a piece of computer code</p>
<p>&lt;col&gt; Specifies column properties for each column within a &lt;colgroup&gt; element </p>
<p>&lt;colgroup&gt; Specifies a group of one or more columns in a table for formatting</p>
<p>&lt;data&gt; Adds a machine-readable translation of a given content</p>
<p>&lt;datalist&gt; Specifies a list of pre-defined options for input controls</p>
<p>&lt;dd&gt; Defines a description/value of a term in a description list</p>
<p>&lt;del&gt; Defines text that has been deleted from a document</p>
<p>&lt;details&gt; Defines additional details that the user can view or hide</p>
<p>&lt;dfn&gt; Specifies a term that is going to be defined within the content</p>
<p>&lt;dialog&gt; Defines a dialog box or window</p>
<p>&lt;dir&gt; Not supported in HTML5. Use &lt;ul&gt; instead.</p>
<p>Defines a directory list</p>
<p>&lt;div&gt; Defines a section in a document</p>
<p>&lt;dl&gt; Defines a description list</p>
<p>&lt;dt&gt; Defines a term/name in a description list</p>
<p>&lt;em&gt; Defines emphasized text </p>
<p>&lt;embed&gt; Defines a container for an external application</p>
<p>&lt;fieldset&gt; Groups related elements in a form</p>
<p>&lt;figcaption&gt; Defines a caption for a &lt;figure&gt; element</p>
<p>&lt;figure&gt; Specifies self-contained content</p>
<p>&lt;font&gt; Not supported in HTML5. Use CSS instead. Defines font, colour, and size for text</p>
<p>&lt;footer&gt; Defines a footer for a document or section</p>
<p>&lt;form&gt; Defines an HTML form for user input</p>
<p>&lt;frame&gt; Not supported in HTML5. Defines a window (a frame) in a frameset</p>
<p>&lt;frameset&gt; Not supported in HTML5. Defines a set of frames</p>
<p>&lt;h1&gt; to &lt;h6&gt; Defines HTML headings</p>
<p>&lt;head&gt; Contains metadata/information for the document</p>
<p>&lt;header&gt; Defines a header for a document or section</p>
<p>&lt;hr&gt; Defines a thematic change in the content</p>
<p>&lt;html&gt; Defines the root of an HTML document</p>
<p>&lt;i&gt; Defines a part of text in an alternate voice or mood</p>
<p>&lt;iframe&gt; Defines an inline frame</p>
<p>&lt;img&gt; Defines an image</p>
<p>&lt;input&gt; Defines an input control</p>
<p>&lt;ins&gt; Defines a text that has been inserted into a document</p>
<p>&lt;kbd&gt; Defines keyboard input</p>
<p>&lt;label&gt; Defines a label for an &lt;input&gt; element</p>
<p>&lt;legend&gt; Defines a caption for a &lt;fieldset&gt; element</p>
<p>&lt;li&gt; Defines a list item</p>
<p>&lt;link&gt; Defines the relationship between a document and an external resource (most used to link to style sheets)</p>
<p>&lt;main&gt; Specifies the main content of a document</p>
<p>&lt;map&gt; Defines an image map</p>
<p>&lt;mark&gt; Defines marked/highlighted text</p>
<p>&lt;meta&gt; Defines metadata about an HTML document</p>
<p>&lt;meter&gt; Defines a scalar measurement within a known range (a gauge)</p>
<p>&lt;nav&gt; Defines navigation links</p>
<p>&lt;noframes&gt; Not supported in HTML5. Defines an alternate content for users that do not support frames</p>
<p>&lt;noscript&gt; Defines an alternate content for users that do not support client-side scripts</p>
<p>&lt;object&gt; Defines a container for an external application</p>
<p>&lt;ol&gt; Defines an ordered list</p>
<p>&lt;optgroup&gt; Defines a group of related options in a drop-down list</p>
<p>&lt;option&gt; Defines an option in a drop-down list</p>
<p>&lt;output&gt; Defines the result of a calculation</p>
<p>&lt;p&gt; Defines a paragraph</p>
<p>&lt;param&gt; Defines a parameter for an object</p>
<p>&lt;picture&gt; Defines a container for multiple image resources</p>
<p>&lt;pre&gt; Defines preformatted text</p>
<p>&lt;progress&gt; Represents the progress of a task</p>
<p>&lt;q&gt; Defines a short quotation</p>
<p>&lt;rp&gt; Defines what to show in browsers that do not support ruby annotations</p>
<p>&lt;rt&gt; Defines an explanation/pronunciation of characters (for East Asian typography)</p>
<p>&lt;ruby&gt; Defines a ruby annotation (for East Asian typography)</p>
<p>&lt;s&gt; Defines text that is no longer correct</p>
<p>&lt;samp&gt; Defines sample output from a computer program</p>
<p>&lt;script&gt; Defines a client-side script</p>
<p>&lt;section&gt; Defines a section in a document</p>
<p>&lt;select&gt; Defines a drop-down list</p>
<p>&lt;small&gt; Defines smaller text</p>
<p>&lt;source&gt; Defines multiple media resources for media elements (&lt;video&gt; and &lt;audio&gt;)</p>
<p>&lt;span&gt; Defines a section in a document</p>
<p>&lt;strike&gt; Not supported in HTML5. Use &lt;del&gt; or &lt;s&gt; instead. Defines strikethrough text</p>
<p>&lt;strong&gt; Defines important text</p>
<p>&lt;style&gt; Defines style information for a document</p>
<p>&lt;sub&gt; Defines subscripted text</p>
<p>&lt;summary&gt; Defines a visible heading for a &lt;details&gt; element</p>
<p>&lt;sup&gt; Defines superscripted text</p>
<p>&lt;svg&gt; Defines a container for SVG graphics</p>
<p>&lt;table&gt; Defines a table</p>
<p>&lt;tbody&gt; Groups the body content in a table</p>
<p>&lt;td&gt; Defines a cell in a table</p>
<p>&lt;template&gt; Defines a container for content that should be hidden when the page loads</p>
<p>&lt;textarea&gt; Defines a multiline input control (text area)</p>
<p>&lt;tfoot&gt; Groups the footer content in a table</p>
<p>&lt;th&gt; Defines a header cell in a table</p>
<p>&lt;thead&gt; Groups the header content in a table</p>
<p>&lt;time&gt; Defines a specific time (or datetime)</p>
<p>&lt;title&gt; Defines a title for the document</p>
<p>&lt;tr&gt; Defines a row in a table</p>
<p>&lt;track&gt; Defines text tracks for media elements (&lt;video&gt; and &lt;audio&gt;)</p>
<p>&lt;tt&gt; Not supported in HTML5. Use CSS instead. Defines teletype text</p>
<p>&lt;u&gt; Defines some text that is unarticulated and styled differently from normal text</p>
<p>&lt;ul&gt; Defines an unordered list</p>
<p>&lt;var&gt; Defines a variable</p>
<p>&lt;video&gt; Defines embedded video content</p>
<p>&lt;wbr&gt; Defines a possible line-break</p>
</div>
<br>
<div id="js">
<br><br><br>
<h3>JS</h3>
<h4>JS is built around functions. Below is a list of JS operators</h4>
<p>+ Addition</p>
<p>- Subtraction</p>
<p>* Multiplication</p>
<p>/ Division</p>
<p>% Modulus (division remainder)</p>
<p>++ Increment</p>
<p>-- Decrement</p>
<p>== equal to</p>
<p>=== equal value and equal type</p>
<p>!= not equal</p>
<p>!== not equal value or not equal type</p>
<p>&gt; greater than</p>
<p>&lt; less than</p>
<p>&gt;= greater than or equal to</p>
<p>&lt;= less than or equal to</p>
<p>&& and</p>
<p>|| or</p>
<p>! not</p>
</div>
<div id="css">
<br><br><br>
<h3>CSS</h3>
<h4>CSS is styles websites! Here is a list of CSS properties</h4>
<p>align-content Specifies the alignment between the lines inside a flexible container when the items do not use all available space</p>
<p>align-items Specifies the alignment for items inside a flexible container</p>
<p>align-self Specifies the alignment for selected items inside a flexible container</p>
<p>all Resets all properties (except unicode-bidi and direction)</p>
<p>animation A shorthand property for all the animation-* properties</p>
<p>animation-delay Specifies a delay for the start of an animation</p>
<p>animation-direction Specifies whether an animation should be played forwards, backwards or in alternate cycles</p>
<p>animation-duration Specifies how long an animation should take to complete one cycle</p>
<p>animation-fill-mode Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)</p>
<p>animation-iteration-count Specifies the number of times an animation should be played</p>
<p>animation-name Specifies a name for the @keyframes animation</p>
<p>animation-play-state Specifies whether the animation is running or paused</p>
<p>animation-timing-function Specifies the speed curve of an animation</p>
<p>backface-visibility Defines whether or not the back face of an element should be visible when facing the user</p>
<p>background A shorthand property for all the background-* properties</p>
<p>background-attachment Sets whether a background image scrolls with the rest of the page, or is fixed</p>
<p>background-blend-mode Specifies the blending mode of each background layer (colour/image)</p>
<p>background-clip Defines how far the background (colour or image) should extend within an element</p>
<p>background-color Specifies the background colour of an element</p>
<p>background-image Specifies one or more background images for an element</p>
<p>background-origin Specifies the origin position of a background image</p>
<p>background-position Specifies the position of a background image</p>
<p>background-repeat Sets if/how a background image will be repeated</p>
<p>background-size Specifies the size of the background images</p>
<p>border A shorthand property for border-width, border-style and border-color</p>
<p>border-bottom A shorthand property for border-bottom-width, border-bottom-style and border-bottom-color</p>
<p>border-bottom-color Sets the colour of the bottom border</p>
<p>border-bottom-left-radius Defines the radius of the border of the bottom-left corner</p>
<p>border-bottom-right-radius Defines the radius of the border of the bottom-right corner</p>
<p>border-bottom-style Sets the style of the bottom border</p>
<p>border-bottom-width Sets the width of the bottom border</p>
<p>border-collapse Sets whether table borders should collapse into a single border or be separated</p>
<p>border-color Sets the colour of the four borders</p>
<p>border-image A shorthand property for all the border-image-* properties</p>
<p>border-image-outset Specifies the amount by which the border image area extends beyond the border box</p>
<p>border-image-repeat Specifies whether the border image should be repeated, rounded or stretched</p>
<p>border-image-slice Specifies how to slice the border image</p>
<p>border-image-source Specifies the path to the image to be used as a border</p>
<p>border-image-width Specifies the width of the border image</p>
<p>border-left A shorthand property for all the border-left-* properties</p>
<p>border-left-color Sets the colour of the left border</p>
<p>border-left-style Sets the style of the left border</p>
<p>border-left-width Sets the width of the left border</p>
<p>border-radius A shorthand property for the four border-*-radius properties</p>
<p>border-right A shorthand property for all the border-right-* properties</p>
<p>border-right-color Sets the colour of the right border</p>
<p>border-right-style Sets the style of the right border</p>
<p>border-right-width Sets the width of the right border</p>
<p>border-spacing Sets the distance between the borders of adjacent cells</p>
<p>border-style Sets the style of the four borders</p>
<p>border-top A shorthand property for border-top-width, border-top-style and border-top-color</p>
<p>border-top-color Sets the colour of the top border</p>
<p>border-top-left-radius Defines the radius of the border of the top-left corner</p>
<p>border-top-right-radius Defines the radius of the border of the top-right corner</p>
<p>border-top-style Sets the style of the top border</p>
<p>border-top-width Sets the width of the top border</p>
<p>border-width Sets the width of the four borders</p>
<p>bottom Sets the elements position, from the bottom of its parent element</p>
<p>box-decoration-break Sets the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.</p>
<p>box-shadow Attaches one or more shadows to an element</p>
<p>box-sizing Defines how the width and height of an element are calculated: should they include padding and borders, or not</p>
<p>break-after Specifies whether or not a page-, column-, or region-break should occur after the specified element</p>
<p>break-before Specifies whether or not a page-, column-, or region-break should occur before the specified element</p>
<p>break-inside Specifies whether or not a page-, column-, or region-break should occur inside the specified element</p>
<p>caption-side Specifies the placement of a table caption</p>
<p>caret-color Specifies the colour of the cursor (caret) in inputs, textareas, or any element that is editable</p>
<p>@charset Specifies the character encoding used in the style sheet</p>
<p>clear Specifies on which sides of an element floating elements are not allowed to float</p>
<p>clip Clips an absolutely positioned element</p>
<p>color Sets the colour of text</p>
<p>column-count Specifies the number of columns an element should be divided into</p>
<p>column-fill Specifies how to fill columns, balanced or not</p>
<p>column-gap Specifies the gap between the columns</p>
<p>column-rule A shorthand property for all the column-rule-* properties</p>
<p>column-rule-color Specifies the colour of the rule between columns</p>
<p>column-rule-style Specifies the style of the rule between columns</p>
<p>column-rule-width Specifies the width of the rule between columns</p>
<p>column-span Specifies how many columns an element should span across</p>
<p>column-width Specifies the column width</p>
<p>columns A shorthand property for column-width and column-count</p>
<p>content Used with the :before and :after pseudo-elements, to insert generated content</p>
<p>counter-increment Increases or decreases the value of one or more CSS counters</p>
<p>counter-reset Creates or resets one or more CSS counters</p>
<p>cursor Specifies the mouse cursor to be displayed when pointing over an element</p>
<p>direction Specifies the text direction/writing direction</p>
<p>display Specifies how a certain HTML element should be displayed</p>
<p>empty-cells Specifies whether or not to display borders and background on empty cells in a table</p>
<p>filter Defines effects (e.g. blurring or colour shifting) on an element before the element is displayed</p>
<p>flex A shorthand property for the flex-grow, flex-shrink, and the flex-basis properties</p>
<p>flex-basis Specifies the initial length of a flexible item</p>
<p>flex-direction Specifies the direction of the flexible items</p>
<p>flex-flow A shorthand property for the flex-direction and the flex-wrap properties</p>
<p>flex-grow Specifies how much the item will grow relative to the rest</p>
<p>flex-shrink Specifies how the item will shrink relative to the rest</p>
<p>flex-wrap Specifies whether the flexible items should wrap or not</p>
<p>float Specifies whether or not a box should float</p>
<p>font A shorthand property for the font-style, font-variant, font-weight, font-size/line-height, and the font-family properties</p>
<p>@font-face A rule that allows websites to download and use fonts other than the "web-safe" fonts</p>
<p>font-family Specifies the font family for text</p>
<p>font-feature-settings Allows control over advanced typographic features in OpenType fonts</p>
<p>@font-feature-values Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType</p>
<p>font-kerning Controls the usage of the kerning information (how letters are spaced)</p>
<p>font-language-override Controls the usage of language-specific glyphs in a typeface</p>
<p>font-size Specifies the font size of text</p>
<p>font-size-adjust Preserves the readability of text when font fallback occurs</p>
<p>font-stretch Selects a normal, condensed, or expanded face from a font family</p>
<p>font-style Specifies the font style for text</p>
<p>font-synthesis Controls which missing typefaces (bold or italic) may be synthesized by the browser</p>
<p>font-variant Specifies whether or not a text should be displayed in a small-caps font</p>
<p>font-variant-alternates Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values</p>
<p>font-variant-caps Controls the usage of alternate glyphs for capital letters</p>
<p>font-variant-east-asian Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)</p>
<p>font-variant-ligatures Controls which ligatures and contextual forms are used in textual content of the elements it applies to</p>
<p>font-variant-numeric Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers</p>
<p>font-variant-position Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font</p>
<p>font-weight Specifies the weight of a font</p>
<p>grid A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties</p>
<p>grid-area Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties</p>
<p>grid-auto-columns Specifies a default column size</p>
<p>grid-auto-flow Specifies how auto-placed items are inserted in the grid</p>
<p>grid-auto-rows Specifies a default row size</p>
<p>grid-column A shorthand property for the grid-column-start and the grid-column-end properties</p>
<p>grid-column-end Specifies where to end the grid item</p>
<p>grid-column-gap Specifies the size of the gap between columns</p>
<p>grid-column-start Specifies where to start the grid item</p>
<p>grid-gap A shorthand property for the grid-row-gap and grid-column-gap properties</p>
<p>grid-row A shorthand property for the grid-row-start and the grid-row-end properties</p>
<p>grid-row-end Specifies where to end the grid item</p>
<p>grid-row-gap Specifies the size of the gap between rows</p>
<p>grid-row-start Specifies where to start the grid item</p>
<p>grid-template A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties</p>
<p>grid-template-areas Specifies how to display columns and rows, using named grid items</p>
<p>grid-template-columns Specifies the size of the columns, and how many columns in a grid layout</p>
<p>grid-template-rows Specifies the size of the rows in a grid layout</p>
<p>hanging-punctuation Specifies whether a punctuation character may be placed outside the line box</p>
<p>height Sets the height of an element</p>
<p>hyphens Sets how to split words to improve the layout of paragraphs</p>
<p>image-rendering Gives a hint to the browser about what aspects of an image are most important to preserve when the image is scaled</p>
<p>@import Allows you to import a style sheet into another style sheet</p>
<p>isolation Defines whether an element must create a new stacking content</p>
<p>justify-content Specifies the alignment between the items inside a flexible container when the items do not use all available space</p>
<p>@keyframes Specifies the animation code</p>
<p>left Specifies the left position of a positioned element</p>
<p>letter-spacing Increases or decreases the space between characters in a text</p>
<p>line-break Specifies how/if to break lines</p>
<p>line-height Sets the line height</p>
<p>list-style Sets all the properties for a list in one declaration</p>
<p>list-style-image Specifies an image as the list-item marker</p>
<p>list-style-position Specifies the position of the list-item markers (bullet points)</p>
<p>list-style-type Specifies the type of list-item marker</p>
<p>margin Sets all the margin properties in one declaration</p>
<p>margin-bottom Sets the bottom margin of an element</p>
<p>margin-left Sets the left margin of an element</p>
<p>margin-right Sets the right margin of an element</p>
<p>margin-top Sets the top margin of an element</p>
<p>mask Hides an element by masking or clipping the image at specific places</p>
<p>mask-type Specifies whether a mask element is used as a luminance or an alpha mask</p>
<p>max-height Sets the maximum height of an element</p>
<p>max-width Sets the maximum width of an element</p>
<p>@media Sets the style rules for different media types/devices/sizes</p>
<p>min-height Sets the minimum height of an element</p>
<p>min-width Sets the minimum width of an element</p>
<p>mix-blend-mode Specifies how an element's content should blend with its direct parent background</p>
<p>object-fit Specifies how the contents of a replaced element should be fitted to the box established by its used height and width</p>
<p>object-position Specifies the alignment of the replaced element inside its box</p>
<p>opacity Sets the opacity level for an element</p>
<p>order Sets the order of the flexible item, relative to the rest</p>
<p>orphans Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element</p>
<p>outline A shorthand property for the outline-width, outline-style, and the outline-colour properties</p>
<p>outline-color Sets the colour of an outline</p>
<p>outline-offset Offsets an outline, and draws it beyond the border edge</p>
<p>outline-style Sets the style of an outline</p>
<p>outline-width Sets the width of an outline</p>
<p>overflow Specifies what happens if content overflows an element's box</p>
<p>overflow-wrap Specifies whether or not the browser may break lines within words in order to prevent overflow (when a string is too long to fit its containing box)</p>
<p>overflow-x Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area</p>
<p>overflow-y Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area</p>
<p>padding A shorthand property for all the padding-* properties</p>
<p>padding-bottom Sets the bottom padding of an element</p>
<p>padding-left Sets the left padding of an element</p>
<p>padding-right Sets the right padding of an element</p>
<p>padding-top Sets the top padding of an element</p>
<p>page-break-after Sets the page-break behaviour after an element</p>
<p>page-break-before Sets the page-break behaviour before an element</p>
<p>page-break-inside Sets the page-break behaviour inside an element</p>
<p>perspective Gives a 3D-positioned element some perspective</p>
<p>perspective-origin Defines at which position the user is looking at the 3D-positioned element</p>
<p>pointer-events Defines whether or not an element reacts to pointer events</p>
<p>position Specifies the type of positioning method used for an element (static, relative, absolute or fixed)</p>
<p>quotes Sets the type of quotation marks for embedded quotations</p>
<p>resize Defines if (and how) an element is resizable by the user</p>
<p>right Specifies the right position of a positioned element</p>
<p>scroll-behavior Specifies whether to smoothly animate the scroll position in a scrollable box, instead of a straight jump</p>
<p>tab-size Specifies the width of a tab character</p>
<p>table-layout Defines the algorithm used to lay out table cells, rows, and columns</p>
<p>text-align Specifies the horizontal alignment of text</p>
<p>text-align-last Describes how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"</p>
<p>text-combine-upright Specifies the combination of multiple characters into the space of a single character</p>
<p>text-decoration Specifies the decoration added to text</p>
<p>text-decoration-color Specifies the colour of the text-decoration</p>
<p>text-decoration-line Specifies the type of line in a text-decoration</p>
<p>text-decoration-style Specifies the style of the line in a text decoration</p>
<p>text-indent Specifies the indentation of the first line in a text-block</p>
<p>text-justify Specifies the justification method used when text-align is "justify"</p>
<p>text-orientation Defines the orientation of the text in a line</p>
<p>text-overflow Specifies what should happen when text overflows the containing element</p>
<p>text-shadow Adds shadow to text </p>
<p>text-transform Controls the capitalization of text</p>
<p>text-underline-position Specifies the position of the underline which is set using the text-decoration property</p>
<p>top Specifies the top position of a positioned element</p>
<p>transform Applies a 2D or 3D transformation to an element</p>
<p>transform-origin Allows you to change the position on transformed elements</p>
<p>transform-style Specifies how nested elements are rendered in 3D space</p>
<p>transition A shorthand property for all the transition-* properties</p>
<p>transition-delay Specifies when the transition effect will start</p>
<p>transition-duration Specifies how many seconds or milliseconds a transition effect takes to complete</p>
<p>transition-property Specifies the name of the CSS property the transition effect is for</p>
<p>transition-timing-function Specifies the speed curve of the transition effect</p>
<p>unicode-bidi Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document</p>
<p>user-select Specifies whether the text of an element can be selected</p>
<p>vertical-align Sets the vertical alignment of an element</p>
<p>visibility Specifies whether or not an element is visible</p>
<p>white-space Specifies how white-space inside an element is handled</p>
<p>widows Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element</p>
<p>width Sets the width of an element</p>
<p>word-break Specifies how words should break when reaching the end of a line</p>
<p>word-spacing Increases or decreases the space between words in a text</p>
<p>word-wrap Allows long, unbreakable words to be broken and wrap to the next line</p>
<p>writing-mode Specifies whether lines of text are laid out horizontally or vertically</p>
<p>z-index Sets the stack order of a positioned element</p>
</div>`
function loadkeywords() {
    document.getElementById('search').value=''
    for(i = 0; i < keywords.length; i++) {
        document.getElementById('keywords').innerHTML+='<option value="'+ keywords[i] +'">'
    }
}

function loadsearch() {
    search(document.getElementById('search').value)
}

function search(text) {
    if (text != '') {
    console.log('You searched "'+text+'." Processing...')
    text = text.replaceAll('<', '&lt;')
    text = text.replaceAll('>', '&gt;')
    try {
        var r = html.match(new RegExp(text, 'g')).length
    } catch (error) {
        let str = confirm('There are 0 results. Search on google?')
        if (str == true) {
            window.open('https://google.com/search?q=' + text, '_blank');
        }
        return;
    }
    alert('There are ' + r + ' result(s)')
    document.write(html.replaceAll(text, '<mark id="r">' + text + '</mark>'))
    location.replace('#r')
    }
}