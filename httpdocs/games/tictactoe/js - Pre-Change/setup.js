var gl;
var canvas;
var mvMatrix;
var shaderProgram;
var vertexPositionAttribute;
var vertexColorAttribute;
var textureCoordAttribute;
var perspectiveMatrix;

function start() {
    canvas = document.getElementById("glcanvas");

    gl = initWebGL(canvas); //init gl context

    if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0) //black, fully opaque
        gl.enable(gl.DEPTH_TEST);   //enable depth testing
        gl.depthFunc(gl.LEQUAL);    //near things obscure far things
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        initShaders();
        initBuffers();
        setInterval(drawScene, 15);
    } else { alert("WebGL could not load correctly") }  //clear the color as well as the depth buffer
}

function initWebGL(canvas) {
    gl = null;

    try {
        // Try to grab the standard context. If it fails, fallback to experimental.
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch (e) { alert('failed to init WebGL:' + e.message); }

    if (!gl) {
        alert('failed to init WebGL');
        gl = null;
    }

    //modify rendered resolution of WebGL context useful when the user resizes the browser
    //gl.viewport(0, 0, canvas.width, canvas.height);

    return gl;
}

//The most important thing to understand before we get started is that even though we're only rendering a two-dimensional object in this example, we're still drawing in 3D space. 
//      As such, we still need to establish the shaders that will light our simple scene as well as draw our object. These will establish how the square is lit.
function initShaders() {
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader = getShader(gl, "shader-vs");

    // Create the shader program
    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program.");
    }

    gl.useProgram(shaderProgram);

    vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);

    /*vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    gl.enableVertexAttribArray(vertexColorAttribute);*/

    textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    gl.enableVertexAttribArray(textureCoordAttribute);
}

//The getShader() routine fetches a shader program with the specified name from the DOM, returning the compiled shader program to the caller, or null if it couldn't be loaded or compiled.
function getShader(gl, id) {
    var shaderScript, theSource, currentChild, shader;
  
    shaderScript = document.getElementById(id);
  
    if (!shaderScript) {
        return null;
    }
  
    theSource = "";
    currentChild = shaderScript.firstChild;
  
    while(currentChild) {
        if (currentChild.nodeType == currentChild.TEXT_NODE) {
            theSource += currentChild.textContent;
        }
    
        currentChild = currentChild.nextSibling;
    }

    //Once the element with the specified ID is found, its text is read into the variable theSource.
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        // Unknown shader type
        return null;
    }

    //Once the code for the shader has been read, we take a look at the MIME type of the shader object to determine whether it's a vertex shader (MIME type "x-shader/x-vertex") 
    //      or a fragment shader (MIME type "x-shader/x-fragment"), then create the appropriate type of shader from the retrieved source code.
    gl.shaderSource(shader, theSource);

    // Compile the shader program
    gl.compileShader(shader);

    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}