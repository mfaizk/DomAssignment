# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)

### Code

```
document.querySelector(".crayons-layout .sidebar-wrapper .side-bar .crayons-card .crayons-subtitle-2").innerHTML="Ineuron"

document.querySelector(".crayons-layout .sidebar-wrapper .side-bar .crayons-card .color-base-70").innerText="I write Code"

```

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Code

```
document
  .querySelectorAll(
    ".as-imagegrid .as-imagegrid--7up .row .as-imagegrid-item [data-analytics-event] .as-imagegrid-item-title .a11y"
  )
  .forEach((e) => {
    e.remove();
  });

var arr = [];

document
  .querySelectorAll(
    ".as-imagegrid .as-imagegrid--7up .row .as-imagegrid-item [data-analytics-event] .as-imagegrid-item-title"
  )
  .forEach((e) => {
    arr.push(e.innerText);
  });
```

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

### Code

```
let l = document.createElement("h3");
l.innerText = "My New FAQ";
document.querySelectorAll(".accordion-homepage")[0].children[7].appendChild(l);
```

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./Pic7.png)

### Code

```
     document.querySelector(".one-tel-number").innerText="7007004678"
```

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./Pic9.png)

### Code

```
document.querySelector(".feature-column-carousel__inner .feature-column-carousel__item .feature-column-carousel__feature .feature-column-carousel__content .feature-column-carousel__button .cta").innerText="Check Out"
```

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./Pic11.png)

### Code

```
document.querySelector(".searchinput-wrapper___18TsX form").addEventListener('mouseover',(e)=>{document.querySelector(".searchinput-wrapper___18TsX form input").style="background-color:red"})

```

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./Pic13.png)

### Code

```
document.querySelector("#top-nav-search-input").value="Css Selector"
```

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./Pic15.png)

### Code

```
document.querySelectorAll("#SIvCob a").forEach((e,i)=>{i%2==0?e.remove():console.log("Skipped")})
```

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

### Output

![Output](./Pic17.png)

### Code

```
document.querySelector(".display-heading-1").style.cssText="color:red;font-family:monospace"
```

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./Pic19.png)

### Code

```
document.querySelector("[data-test-label=landing-big-cta]").addEventListener('mouseover',()=>{document.querySelector("[data-test-label=landing-big-cta] .login-btn-text").style.backgroundColor="red"})
```

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./Pic21.png)

### Code

```
document.querySelector(".header .wrapper .logo").innerHTML=`<img src="https://ineuron.ai/images/ineuron-logo.png" style="width: 80px;
height: 24px" >`
```

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

![Output](./Pic23.png)

### Code

```
document.querySelector(".btn-primary").style.backgroundColor="blue"
```

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

### Output

![Output](./Pic25.png)

### Code

```
document.querySelector(".fl-heading-text").innerText="JSBOOTCAMP"
```

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

### Output

![Output](./Pic27.png)

### Code

```
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize="250px"
```

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

### Output

![Output](./Pic29.png)

### Code

```
document.querySelector(".ps-title").style.cssText="text-align:end"
```

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

### Output

![Output](./Pic31.png)

### Code

```
document.querySelector(".section-title_title__VEDfK").innerText="Start with Scratch"
```

17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./Pic33.png)

### Tasks

     change the button text To current Date.

### Output

![Output](./Pic32.png)

### Code

```
var date=new Date()
document.querySelector(".btn-container").innerHTML=date.toUTCString()
```

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

![Output](./Pic35.png)

### Code

```
document.querySelector(".p-f03-footer-container .p-footer").style.backgroundColor="orange"
```

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./Pic36.png)

### Tasks

    extract the canon logo

### Output

![Output](./Pic37.png)

### Code

```
document.querySelector(".navbar-brand img").src
```

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

![Output](./Pic39.png)

### Code

```
document.querySelector(".product-card-content .wide .desc").style.color="orange"
```
