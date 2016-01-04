var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is method to set the height
rectangle.setHeight = function (newHeight) {
this.height = newHeight;
};

// finish this method
rectangle.setWidth = function (newWidth) {
this.width = newWidth;
};

//  the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);