# `<+>` More Tags
*A CSS & JS Library*

<br>

### **\<mono\>**
Makes all child text monospaced.
```html
<mono>This is code</mono>
```

<br>

### **\<log\>** & **MTLog()**
Simple user viewable log with printing functionality. [Example](https://jsfiddle.net/sykeben/jphbf8xm/)
```html
<log id="example"></log>

<script>
   var example = new MTLog('example');
   example.print('Hello, World!');
</script>
```

<br>

### **\<result\>**
Displays the result of written JS with an optional label.
```html
<result code="Math.random()">Random #:</result>
```