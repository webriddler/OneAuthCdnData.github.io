# OneAuth Authentication Model
<img src="https://user-images.githubusercontent.com/58429743/220025437-b9d799c1-6687-4394-920f-c2f12bb229fe.png" width = "100%" />

<h2>What is OneAuth?</h2>
<p>It's a universal authentication system that helps to add an authentication backend to any website without any massive block of code.
All you need is just a script tag that composes all the functionalities. </p>

<h2>How it's helpful</h2>
<p>There are many scenarios where you can make the best of its use:</p>
<ul>
<li><b>Limited and genuine access</b>: <i>OneAuth is very helpful if you want your website to be free from bot access or attacks.</i></li>
<li><b>Only registered users: </b>: <i>If the user is authenticated, only then are they allowed to access your site. Rest we will handle 😎</i></li>
</ul>

<h2>How to add OneAuth?</h2>
<p>It's very easy, just follow the following steps:</p>
<ul>
  <li>Paste the following <code><script></code> tag in the <code><body></code> section of your HTML file.</li><br/>
  
  ```js
  <script async type="text/javascript" src="https://cdn.jsdelivr.net/gh/dev3058/OneAuthCdnData@a6a8bd273623f47402f037d7367312105b8913a7/dist/authentication.js"></script>
  ```
  <li>Remember to add the above script only in the main/home page of your website.</li>
</ul>

<h2>Authentication Data Scopes</h2>
<p>There are some scopes that come by default when the user passes the authentication test. </p>
<ul>
<li>For accessing their Username use <code>id = "OneAuthUserName"</code> inside any HTML tag. E.g.</li><br/>

```
<p>Your username is: <span id="OneAuthUserName"></span></p>
```
<li>and for having their first name use <code>id = "OneAuthFirstName"</code>, e.g.</li><br/>

```
<p>Your Name is: <span id="OneAuthFirstName"></span></p>
```
<hr>
<i>Resource credit: <a href="https://blog.3058.in/2023/02/oneauth-authentication-model.html" target="_blank">Developer Zone</a></i>
