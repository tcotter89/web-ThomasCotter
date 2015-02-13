function runIntro() {
    // Create a buffer and put a single clipspace rectangle in
    // it (2 triangles)
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
       10, 20,
       280, 20,
       10, 150,
       10, 150,
       280, 20,
       280, 150]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // draw
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    var image = new Image();
    image.src = "images/menuTexture.jpg";
    image.onload = function () {
        render(image);
    }

}