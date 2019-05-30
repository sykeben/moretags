# `<+>` More Tags
*A CSS & JS Framework*  
<sup>~ [Website](https://sykeben.github.io/moretags) ~ [Latest Docs](https://sykeben.github.io/moretags/v/latest.html) ~</sup>

<br>

### **\<mono\>**
Makes all child text monospaced. [Example](https://sykeben.github.io/moretags/e/mono.html)
```html
<mono>This is code</mono>
```

<br>

### **\<log\>** & **MTLog()**
Simple user viewable log with printing functionality. [Example](https://sykeben.github.io/moretags/e/log.html)
```html
<log id="example"></log>

<script>
   var example = new MTLog('example');
   example.print('Hello, World!');
</script>
```

<br>

### **\<result\>**
Displays the result of written JS with an optional label. [Example](https://sykeben.github.io/moretags/e/result.html)
```html
<result code="Math.random()">Random #:</result>
```

<br>

### **\<un\>**, **\<on\>**, & **\<tn\>**
Underlines (un), Overlines (on), or Through-Lines (tn) all child text. [Example](https://sykeben.github.io/moretags/e/unontn.html)
```html
<un>This is important!</un>
Som<on>e</on> of th<on>e</on>se <on>a</on>re acc<on>e</on>nted.
<tn>This is crossed off.</tn>
```
