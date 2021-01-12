class miEfectostexto extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
<section class="letras">      
    <div class="a">
        <svg viewBox="0 0 800 600">
        <symbol id="s-text">
            <text text-anchor="middle"
                x="50%"
                y="35%"
                class="text--line"
                >
            Elastic
            </text>
            <text text-anchor="middle"
                x="50%"
                y="68%"
                class="text--line2"
                >
            Stroke
            </text>
            
        </symbol>
        
        <g class="g-ants">
            <use xlink:href="#s-text"
            class="text-copy"></use>     
            <use xlink:href="#s-text"
            class="text-copy"></use>     
            <use xlink:href="#s-text"
            class="text-copy"></use>     
            <use xlink:href="#s-text"
            class="text-copy"></use>     
            <use xlink:href="#s-text"
            class="text-copy"></use>     
        </g>
        </svg>
    </div>
    <div class="b">
    <div class='content'>
  <div class='visible'>
    <p>
      Hello
    </p>
    <ul>
      <li>world !</li>
      <li>Micro !</li>
      <li>users !</li>
    </ul>
  </div>
</div>

    </div>

    <div class="c">
 ⚠ achtung ⚠
</div>

<div class="d">
<!--
<link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
<h1>
  <em>C</em>
  <em class="planet left">O</em>
  <em>S</em>
  <em>M</em>
  <em class="planet right">O</em>
  <em>S</em>
</h1>
-->
</div>


<div class="e">
<h1>Micro</h1>
</div>
</section>
    `;
    }
  }
  customElements.define("mi-efectostexto", miEfectostexto);
 
$('#logo-size').change(function () {                    
    var fontsize = $(this).val()/10 + "px";
    $('html').css("font-size", fontsize );
  });
  
  $('#image-size').change(function () {                    
    var Width = $(this).val() + "px";
    $('img').css("width", Width );
  });