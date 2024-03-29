
function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  
  loco();
  
  
  function menuPageAnime(){
    var currentNavColor;
    var navR =  document.querySelector('#navR');
    var anime=false;
    navR.addEventListener('click',function(){
      if(anime===false){
        currentNavColor = document.querySelector('.line').style.backgroundColor;
        var tl = gsap.timeline();
        tl.to('#menuPage',{
          top:0,
        },"A")
        .to('#navR #line2',{
          rotate: '-45deg',
          position: "relative",
          top: '-0.6vw',
        },"A")
        .to('#navR #line1',{
          rotate: '45deg'
        },"A")
        .to('#nav,#navC>svg', {
          color: "#000",
          fill: '#000',
        }, "A")
        .to('.line', {
          backgroundColor: "#000"
        }, "A")
        
        anime=true;
      }
      else{
        anime=false;
        
        var tl = gsap.timeline();
        tl.to('#menuPage',{
          top:'-100%',
        },"A")
        .to('#navR #line2',{
          rotate: '0deg',
          position: "relative",
          top: '0vw',
        },"A")
        .to('#navR #line1',{
          rotate: '0deg'
        },"A")
        if(currentNavColor=='rgb(0, 0, 0)'){
          
        }
        else{
          tl.to('#nav,#navC>svg', {
            color: "#fff",
            fill: '#fff',
          }, "A")
          .to('.line', {
            backgroundColor: "#fff"
          }, "A")
        }
      }
    })
  }
  
  
  function h1ToSpan(){
    var h1s= document.querySelectorAll('h1');
    h1s.forEach(function(h1){
      var clutter ="";
      h1.textContent.split("").forEach(function(e){
        clutter+=`<span>${e}</span>`;
      })
      h1.innerHTML=clutter;
    })
  }
  
  function h3ToSpan(){
    var h3s= document.querySelectorAll('h3');
    h3s.forEach(function(h3){
      var clutter ="";
      h3.textContent.split("").forEach(function(e){
        clutter+=`<span>${e}</span>`;
      })
      h3.innerHTML=clutter;
    })
  }
  
  
  function page1Anime() {
    function canvas1() {
      const canvas = document.querySelector("#canvas1");
      const context = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
  
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });
  
      function files(index) {
        var data = `
    https://neverland.agency/assets/0001.6092bc89.webp
    https://neverland.agency/assets/0002.0d0eda63.webp
    https://neverland.agency/assets/0003.ca7b38f3.webp
    https://neverland.agency/assets/0004.4aace1a4.webp
    https://neverland.agency/assets/0005.11a84f1a.webp
    https://neverland.agency/assets/0006.53da3b21.webp
    https://neverland.agency/assets/0007.dbd27e9b.webp
    https://neverland.agency/assets/0008.a8723adf.webp
    https://neverland.agency/assets/0009.361e0ae1.webp
    https://neverland.agency/assets/0010.6562a56d.webp
    https://neverland.agency/assets/0011.57bbc8b2.webp
    https://neverland.agency/assets/0012.e8b861c0.webp
    https://neverland.agency/assets/0013.19f0aedd.webp
    https://neverland.agency/assets/0014.c218eb85.webp
    https://neverland.agency/assets/0015.7ce373ff.webp
    https://neverland.agency/assets/0016.7591480f.webp
    https://neverland.agency/assets/0017.568cdca0.webp
    https://neverland.agency/assets/0018.1771360f.webp
    https://neverland.agency/assets/0019.ca23f56c.webp
    https://neverland.agency/assets/0020.89b8a885.webp
    https://neverland.agency/assets/0021.912a0920.webp
    https://neverland.agency/assets/0022.98aef5b6.webp
    https://neverland.agency/assets/0023.8e6d8139.webp
    https://neverland.agency/assets/0024.360754d7.webp
    https://neverland.agency/assets/0025.59ac8ca9.webp
    https://neverland.agency/assets/0026.03dc177e.webp
    https://neverland.agency/assets/0027.f2fcc66f.webp
    https://neverland.agency/assets/0028.3c68eca5.webp
    https://neverland.agency/assets/0029.3830c1ca.webp
    https://neverland.agency/assets/0030.313c7bff.webp
    https://neverland.agency/assets/0031.ed19d3d0.webp
    https://neverland.agency/assets/0032.e5722575.webp
    https://neverland.agency/assets/0033.57e4fbbf.webp
    https://neverland.agency/assets/0034.26593155.webp
    https://neverland.agency/assets/0035.c478bb6e.webp
    https://neverland.agency/assets/0036.7617954b.webp
    https://neverland.agency/assets/0037.ff0d6e04.webp
    https://neverland.agency/assets/0038.454374f5.webp
    https://neverland.agency/assets/0039.6c849dce.webp
    https://neverland.agency/assets/0040.6d54db4b.webp
    https://neverland.agency/assets/0041.d17a75b5.webp
    https://neverland.agency/assets/0042.8e58519f.webp
    https://neverland.agency/assets/0043.a097a1c8.webp
    https://neverland.agency/assets/0044.1cd5291a.webp
    https://neverland.agency/assets/0045.7261d27f.webp
    https://neverland.agency/assets/0046.4a0fbc3a.webp
    https://neverland.agency/assets/0047.05927d38.webp
    https://neverland.agency/assets/0048.a7f3a34b.webp
    https://neverland.agency/assets/0049.4f784875.webp
    https://neverland.agency/assets/0050.3b1729e5.webp
    https://neverland.agency/assets/0051.4ba7db54.webp
    https://neverland.agency/assets/0052.46af8114.webp
    https://neverland.agency/assets/0053.122f3406.webp
    https://neverland.agency/assets/0054.67083a77.webp
    https://neverland.agency/assets/0055.63219e06.webp
    https://neverland.agency/assets/0056.293d230f.webp
    https://neverland.agency/assets/0057.b264bb1b.webp
    https://neverland.agency/assets/0058.4e6bbf2d.webp
    https://neverland.agency/assets/0059.4bad6714.webp
    https://neverland.agency/assets/0060.d0fd1dbc.webp
    https://neverland.agency/assets/0061.8fc89c0d.webp
    https://neverland.agency/assets/0062.75b6ed2e.webp
    https://neverland.agency/assets/0063.e58fec21.webp
    https://neverland.agency/assets/0064.22bd60d1.webp
    https://neverland.agency/assets/0065.3d29b95f.webp
    https://neverland.agency/assets/0066.956e9808.webp
    https://neverland.agency/assets/0067.8fe4db86.webp
    https://neverland.agency/assets/0068.05d2eb46.webp
    https://neverland.agency/assets/0069.1bb341ff.webp
    https://neverland.agency/assets/0070.7f21347f.webp
    https://neverland.agency/assets/0071.f4170e25.webp
    https://neverland.agency/assets/0072.3db2e158.webp
    https://neverland.agency/assets/0073.ba8215f1.webp
    https://neverland.agency/assets/0074.29a935f8.webp
    https://neverland.agency/assets/0075.3648b877.webp
    https://neverland.agency/assets/0076.395b8926.webp
    https://neverland.agency/assets/0077.4a22fcec.webp
    https://neverland.agency/assets/0078.246033aa.webp
    https://neverland.agency/assets/0079.64ecb26b.webp
    https://neverland.agency/assets/0080.c1c7483f.webp
    https://neverland.agency/assets/0081.260fbec3.webp
    https://neverland.agency/assets/0082.548c4ab9.webp
    https://neverland.agency/assets/0083.fe120aba.webp
    https://neverland.agency/assets/0084.c111ddc3.webp
    https://neverland.agency/assets/0085.a31c2799.webp
    https://neverland.agency/assets/0086.07ee9200.webp
    https://neverland.agency/assets/0087.85667652.webp
    https://neverland.agency/assets/0088.b7bea6b9.webp
    https://neverland.agency/assets/0089.c1d2d545.webp
    https://neverland.agency/assets/0090.03a882f6.webp
    https://neverland.agency/assets/0091.77c5097b.webp
    https://neverland.agency/assets/0092.d9eb834e.webp
    https://neverland.agency/assets/0093.27e749e5.webp
    https://neverland.agency/assets/0094.36f380b4.webp
    https://neverland.agency/assets/0095.a9b66983.webp
    https://neverland.agency/assets/0096.a99d5952.webp
    https://neverland.agency/assets/0097.3620b5b5.webp
    https://neverland.agency/assets/0098.52874d61.webp
    https://neverland.agency/assets/0099.c07fd584.webp
    https://neverland.agency/assets/0100.20fab468.webp
    https://neverland.agency/assets/0101.1b3a8f1b.webp
    https://neverland.agency/assets/0102.d4e135d6.webp
    https://neverland.agency/assets/0103.dd55c798.webp
    https://neverland.agency/assets/0104.9f40453f.webp
    https://neverland.agency/assets/0105.b7566ad9.webp
    https://neverland.agency/assets/0106.0947b2a7.webp
    https://neverland.agency/assets/0107.bf64a661.webp
    https://neverland.agency/assets/0108.691f2046.webp
    https://neverland.agency/assets/0109.0dcbc659.webp
    https://neverland.agency/assets/0110.c97e80e7.webp
    https://neverland.agency/assets/0111.603f5a86.webp
    https://neverland.agency/assets/0112.9e3bbcd3.webp
    https://neverland.agency/assets/0113.63dbae55.webp
    https://neverland.agency/assets/0114.eeefc95e.webp
    https://neverland.agency/assets/0115.75b22289.webp
    https://neverland.agency/assets/0116.98e6d982.webp
    https://neverland.agency/assets/0117.6715eaac.webp
    https://neverland.agency/assets/0118.1edf8f57.webp
    https://neverland.agency/assets/0119.a69aedb9.webp
    https://neverland.agency/assets/0120.6cd83251.webp
    https://neverland.agency/assets/0121.7ae8021b.webp
    https://neverland.agency/assets/0122.3517cdab.webp
    https://neverland.agency/assets/0123.26c0c828.webp
    https://neverland.agency/assets/0124.73ccb271.webp
    https://neverland.agency/assets/0125.3417be6f.webp
    https://neverland.agency/assets/0126.4140979f.webp
    https://neverland.agency/assets/0127.43987755.webp
    https://neverland.agency/assets/0128.7b97aa5a.webp
    https://neverland.agency/assets/0129.0c324526.webp
    https://neverland.agency/assets/0130.5f078a69.webp
    https://neverland.agency/assets/0131.a168ea4b.webp
    https://neverland.agency/assets/0132.165189b6.webp
    https://neverland.agency/assets/0133.f0db2c3d.webp
    https://neverland.agency/assets/0134.9d2b664e.webp
    https://neverland.agency/assets/0135.1eaa3346.webp
    https://neverland.agency/assets/0136.dc55de5e.webp
    https://neverland.agency/assets/0137.44d20eac.webp
    https://neverland.agency/assets/0138.7e757891.webp
    https://neverland.agency/assets/0139.c459e880.webp
    https://neverland.agency/assets/0140.b0da991a.webp
    https://neverland.agency/assets/0141.f88d43b3.webp
    https://neverland.agency/assets/0142.7649691d.webp
    https://neverland.agency/assets/0143.44b403f3.webp
    https://neverland.agency/assets/0144.3924295e.webp
    https://neverland.agency/assets/0145.fb5ea5a4.webp
    https://neverland.agency/assets/0146.25875915.webp
    https://neverland.agency/assets/0147.e7801793.webp
    https://neverland.agency/assets/0148.f176b71c.webp
    https://neverland.agency/assets/0149.56cbfced.webp
    https://neverland.agency/assets/0150.1ca09a66.webp
    https://neverland.agency/assets/0151.a94b5cdb.webp
    https://neverland.agency/assets/0152.4586f23c.webp
    https://neverland.agency/assets/0153.d5d587b5.webp
    https://neverland.agency/assets/0154.ae870207.webp
    https://neverland.agency/assets/0155.1af81ba6.webp
    https://neverland.agency/assets/0156.6ad16740.webp
    https://neverland.agency/assets/0157.88ab5e09.webp
    https://neverland.agency/assets/0158.03d34446.webp
    https://neverland.agency/assets/0159.4c62584f.webp
    https://neverland.agency/assets/0160.ef399f69.webp
    https://neverland.agency/assets/0161.e5c1660a.webp
    https://neverland.agency/assets/0162.aedb121e.webp
    https://neverland.agency/assets/0163.a64559cf.webp
    https://neverland.agency/assets/0164.8d435d74.webp
    https://neverland.agency/assets/0165.d0d74920.webp
    https://neverland.agency/assets/0166.5050ada6.webp
    https://neverland.agency/assets/0167.6ca0b95e.webp
    https://neverland.agency/assets/0168.1db2d9a5.webp
    https://neverland.agency/assets/0169.c7126214.webp
    https://neverland.agency/assets/0170.6daefd9f.webp
    https://neverland.agency/assets/0171.6798021d.webp
    https://neverland.agency/assets/0172.7eae7481.webp
    https://neverland.agency/assets/0173.fb1fb7c3.webp
    https://neverland.agency/assets/0174.fe50aa6e.webp
    https://neverland.agency/assets/0175.f3c9e9c1.webp
    https://neverland.agency/assets/0176.0d158f5d.webp
    https://neverland.agency/assets/0177.847bee6d.webp
    https://neverland.agency/assets/0178.2f1724cf.webp
    https://neverland.agency/assets/0179.0680274d.webp
    https://neverland.agency/assets/0180.9f5b661b.webp
    
     `;
        return data.split("\n")[index];
      }
  
      const frameCount = 180;
  
      const images = [];
      const imageSeq = {
        frame: 1,
      };
  
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
      }
      var tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.0000001,
          trigger: `#page1>canvas`,
          //   set start end according to preference
          start: `top top`,
          end: `400% top`,
          scroller: `#main`,
        },
      })
  
      tl.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        onUpdate: render,
      });
  
      images[1].onload = render;
  
      function render() {
        scaleImage(images[imageSeq.frame], context);
      }
  
      function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
      ScrollTrigger.create({
        trigger: "#page1",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `400% top`,
      });
      tl.to('#page1>canvas', {
        ease: `none`,
        scale: .8,
      });
  
      var tl2 = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: `#page1>canvas`,
          //   set start end according to preference
          start: `400% top`,
          end: `400% top`,
          scroller: `#main`,
        },
      })
  
      tl2.to('#nav,#navC>svg', {
        color: "#000",
        fill: '#000',
      }, "A")
      tl2.to('.line', {
        backgroundColor: "#000"
      }, "A")
    }
    canvas1();
  
    gsap.to('#page1 h1 span',{
      opacity:0,
      stagger:0.1,
      scrollTrigger: {
        scrub: 0.0000001,
        trigger: `#page1 canvas`,
        start: `top top`,
        end: `30% top`,
        scroller: `#main`,
      },
    })
    gsap.to('#page1 h3 span',{
      opacity:0,
      stagger:0.1,
      scrollTrigger: {
        scrub: 0.0000001,
        trigger: `#page1 canvas`,
        start: `30% top`,
        end: `60% top`,
        scroller: `#main`,
      },
    })
    
  }
  
  
  
  function page3Anime(){
  
    var uTL= gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#page3',
        scrub:1,
        start:'top 30%',
        end:'top 30%'
      }
    })
    
    uTL.to('#fLC1',{
      transform:'translateX(-100%)',
      color:"#fff"
    },'x')
    .to('#fLC2',{
      transform:'translateX(0%)',
      color:"#fff"
    },'x')
  
  
    var tl11=gsap.timeline({
      scrollTrigger:{
        trigger:'#page3',
        scroller:'#main',
        start:'top 0%',
        end:'top 0%',
        scrub:1
      }
    })
    
    
    tl11.to('#nav,#navC>svg', {
      color: "#fff",
      fill: '#fff',
    }, "B")
    tl11.to('.line', {
      backgroundColor: "#fff"
    }, "B")
    
  
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#page3',
        scroller:'#main',
        start:'top -80%',
        end:'top -80%',
        scrub:1,
      }
    })
  
    tl.to('#s1',{
      transform:"translateY(-100%)",
    },"z")
    .to('#s2',{
      transform:"translateY(-100%)",
    },"z")
  
  
    var tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'#page3',
        scroller:'#main',
        start:'top -170%',
        end:'top -170%',
        scrub:1,
      }
    })
    .to('#s2',{
      transform:"translateY(-200%)",
    },'y')
    .to('#s3',{
      transform:"translateY(-100%)",
    },'y')
  
    gsap.to('#ourExpertises',{
      top:'-67vw',
      scrollTrigger:{
        trigger:'#page3',
        scroller:'#main',
        start:'top 0%',
        end:'top -200%',
        scrub:1,
        pin:true
      }
    })
  }
  
  function page4Anime(){
  
    var uTL= gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#page4',
        scrub:1,
        start:'top 30%',
        end:'top 30%'
      }
    })
    
    uTL.to('#fLC2',{
      transform:'translateX(-100%)',
      color:"#fff"
    },'x')
    .to('#fLC3',{
      transform:'translateX(0%)',
    },'x')
  
    
    var tl11=gsap.timeline({
      scrollTrigger:{
        trigger:'#page4',
        scroller:'#main',
        start:'top 0%',
        end:'top 0%',
        scrub:1
      }
    })
    
    
    tl11.to('#nav,#navC>svg', {
      color: "#000",
      fill: '#000',
    }, "B")
    tl11.to('.line', {
      backgroundColor: "#000"
    }, "B")
  }
  
  function page5Anime(){
    gsap.to('#page5 h1 span',{
      opacity:0,
      stagger:.1,
      scrollTrigger:{
        scroller:'#main',
        trigger:'#page5',
        start:'top 20%',
        end:'top 0%',
        scrub:true
      }
    })
  }
  
  function page6Anime(){
  
  
    var uTL= gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#page6',
        scrub:1,
        start:'top 30%',
        end:'top 30%'
      }
    })
    
    uTL.to('#fLC3',{
      transform:'translateX(-100%)',
      color:"#fff"
    },'x')
    .to('#fLC4',{
      transform:'translateX(0%)',
      color:'#fff'
    },'x')
  
  
    var tl11=gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#canvas2',
        start:'top 0%',
        end:'top 0%',
        scrub:1
      }
    })
    
    
    tl11.to('#nav,#navC>svg', {
      color: "#fff",
      fill: '#fff',
    }, "B")
    tl11.to('.line', {
      backgroundColor: "#fff"
    }, "B")
  
  
  
    function canvas2() {
      const canvas = document.querySelector("#canvas2");
      const context = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
  
      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });
  
      function files(index) {
        var data = `
  https://neverland.agency/assets/0001.79b3f4bd.webp
  https://neverland.agency/assets/0002.c8a269b8.webp
  https://neverland.agency/assets/0003.6a5589b0.webp
  https://neverland.agency/assets/0004.a6707b12.webp
  https://neverland.agency/assets/0005.a6a57710.webp
  https://neverland.agency/assets/0006.c931e419.webp
  https://neverland.agency/assets/0007.5eb18740.webp
  https://neverland.agency/assets/0008.01b6202e.webp
  https://neverland.agency/assets/0009.96fbce3c.webp
  https://neverland.agency/assets/0010.1fe68672.webp
  https://neverland.agency/assets/0011.5154b5c6.webp
  https://neverland.agency/assets/0012.26fc3b2d.webp
  https://neverland.agency/assets/0013.e2b7d4c5.webp
  https://neverland.agency/assets/0014.8f1e0d07.webp
  https://neverland.agency/assets/0015.e3229a8f.webp
  https://neverland.agency/assets/0016.e6abe5d5.webp
  https://neverland.agency/assets/0017.1d35af76.webp
  https://neverland.agency/assets/0018.1ac6708b.webp
  https://neverland.agency/assets/0019.b627e3a9.webp
  https://neverland.agency/assets/0020.e5d18983.webp
  https://neverland.agency/assets/0021.a2bc192b.webp
  https://neverland.agency/assets/0022.d7f2c10d.webp
  https://neverland.agency/assets/0023.ac95d331.webp
  https://neverland.agency/assets/0024.fdb7ccb2.webp
  https://neverland.agency/assets/0025.f999bc5d.webp
  https://neverland.agency/assets/0026.e50f82db.webp
  https://neverland.agency/assets/0027.776b1c9f.webp
  https://neverland.agency/assets/0028.61ef7fa7.webp
  https://neverland.agency/assets/0029.8cc38e0a.webp
  https://neverland.agency/assets/0030.5a52e756.webp
  https://neverland.agency/assets/0031.44132d6b.webp
  https://neverland.agency/assets/0032.f3edbece.webp
  https://neverland.agency/assets/0033.771589fd.webp
  https://neverland.agency/assets/0034.6aa638e5.webp
  https://neverland.agency/assets/0035.30183aeb.webp
  https://neverland.agency/assets/0036.6663aca2.webp
  https://neverland.agency/assets/0037.4a222751.webp
  https://neverland.agency/assets/0038.0024aa05.webp
  https://neverland.agency/assets/0039.a3026556.webp
  https://neverland.agency/assets/0040.8d2dd547.webp
  https://neverland.agency/assets/0041.d14a25e4.webp
  https://neverland.agency/assets/0042.14dc7353.webp
  https://neverland.agency/assets/0043.44351f30.webp
  https://neverland.agency/assets/0044.455871e1.webp
  https://neverland.agency/assets/0045.c9eda857.webp
  https://neverland.agency/assets/0046.917eb755.webp
  https://neverland.agency/assets/0047.6c5d5dae.webp
  https://neverland.agency/assets/0048.b5ceecd4.webp
  https://neverland.agency/assets/0049.9d119b5a.webp
  https://neverland.agency/assets/0050.7f011c3c.webp
  https://neverland.agency/assets/0051.d4f21794.webp
  https://neverland.agency/assets/0052.19b9b4ec.webp
  https://neverland.agency/assets/0053.e582e891.webp
  https://neverland.agency/assets/0054.8c15855f.webp
  https://neverland.agency/assets/0055.77d816c9.webp
  https://neverland.agency/assets/0056.f7829d8d.webp
  https://neverland.agency/assets/0057.11aa75b0.webp
  https://neverland.agency/assets/0058.e4089d82.webp
  https://neverland.agency/assets/0059.03eaa7f8.webp
  https://neverland.agency/assets/0060.3898db51.webp
  https://neverland.agency/assets/0061.162f1501.webp
  https://neverland.agency/assets/0062.060ae4ca.webp
  https://neverland.agency/assets/0063.e310a7ff.webp
  https://neverland.agency/assets/0064.bad2cc1f.webp
  https://neverland.agency/assets/0065.a56aa3ce.webp
  https://neverland.agency/assets/0066.52d64310.webp
  https://neverland.agency/assets/0067.cb9b8106.webp
  https://neverland.agency/assets/0068.d9c4004f.webp
  https://neverland.agency/assets/0069.8647df65.webp
  https://neverland.agency/assets/0070.8c704ed7.webp
  https://neverland.agency/assets/0071.4a5e0b80.webp
  https://neverland.agency/assets/0072.b51d7e58.webp
  https://neverland.agency/assets/0073.abe6f10f.webp
  https://neverland.agency/assets/0074.7cba1065.webp
  https://neverland.agency/assets/0075.06da08e5.webp
  https://neverland.agency/assets/0076.28935a69.webp
  https://neverland.agency/assets/0077.5581cd5a.webp
  https://neverland.agency/assets/0078.28bc548e.webp
  https://neverland.agency/assets/0079.faf9cf25.webp
  https://neverland.agency/assets/0080.58ff647c.webp
  https://neverland.agency/assets/0081.a3a587b1.webp
  https://neverland.agency/assets/0082.3821e366.webp
  https://neverland.agency/assets/0083.12ed85d0.webp
  https://neverland.agency/assets/0084.d506f8c7.webp
  https://neverland.agency/assets/0085.1550ca9a.webp
        `;
        return data.split("\n")[index];
      }
  
      const frameCount = 85;
  
      const images = [];
      const imageSeq = {
        frame: 1,
      };
  
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
      }
      var tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.0000001,
          trigger: `#page6>canvas`,
          //   set start end according to preference
          start: `top top`,
          end: `300% top`,
          scroller: `#main`,
        },
      })
  
      tl.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        onUpdate: render,
      });
  
      images[1].onload = render;
  
      function render() {
        scaleImage(images[imageSeq.frame], context);
      }
  
      function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
      ScrollTrigger.create({
        trigger: "#page6",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `300% top`,
      });
      tl.to('#page6>canvas', {
        ease: `none`,
        scale: .8,
      },"A")
      .to('#nav,#navC>svg', {
        color: "#000",
        fill: '#000',
      }, "A")
      .to('.line', {
        backgroundColor: "#000"
      }, "A")
      .from('#page6 h1 span',{
        opacity:0,
        stagger:.001
      },"A")
      .from('.page6Elem',{
        opacity:0,
        stagger:.2
      },"A")
      .to('#fLC4',{
        color:'#000'
      },'A')
  
  
    }
    canvas2();
  }
  
  function page7Anime(){
    var uTL= gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#page7',
        scrub:1,
        start:'top 30%',
        end:'top 30%'
      }
    })
    
    uTL.to('#fLC4',{
      transform:'translateX(-100%)',
    },'x')
    .to('#fLC5',{
      transform:'translateX(0%)',
    },'x')
  }
  
  function footerAnime(){
  
    var uTL= gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#footer',
        scrub:1,
        start:'top 30%',
        end:'top 30%'
      }
    })
    
    uTL.to('#fLC5',{
      transform:'translateX(-100%)',
    })
    
  
    var tl11=gsap.timeline({
      scrollTrigger:{
        scroller:'#main',
        trigger:'#footer',
        start:'top 0%',
        end:'top 0%',
        scrub:1
      }
    })  
    tl11.to('#navC>svg', {
      opacity:0
    }, "B")
  
  }
  
  
  
  menuPageAnime();
  h1ToSpan();
  h3ToSpan();
  page1Anime();
  if(window.innerWidth<=600){
  
    function loading(){
      var tl = gsap.timeline()
      .from('#loadingLogo',{
        opacity:0,
        duration:1.5,
        repeat:1,
      })
      .to('#loadingLogo',{
        rotate:'360deg',
        top:"10%"
      })
      .to('#loading',{
        opacity:0,
        zIndex:'-1'
      })
      .to('html,body',{
        height:'100%',
        overflow:'visible'
      })
    }
    loading();
  
  
    function page2Anime(){
  
      gsap.to('#page2>img',{
        transform:'translateY(-200%)',
        scale:'1 !important',
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2',
          start:'top 100%',
          end:'top -30%',
          scrub:1,
        }
      })
      gsap.to('#fLC1',{
        transform:'translateX(0%)',
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2',
          scrub:1,
          start:'top 30%',
          end:'top 30%'
        }
      })
      gsap.from('#page2>h1>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2',
          scrub:1,
          start:'top 70%',
          end:'top 50%'
        }
      })
      gsap.from('#page2Text1>h3>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text1',
          scrub:1,
          start:'top 70%',
          end:'top 50%'
        }
      })
      gsap.from('#page2Text1>h1>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text1',
          scrub:1,
          start:'top 60%',
          end:'top 30%'
        }
      })
      gsap.from('#page2Text2>h3>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text2',
          scrub:1,
          start:'top 70%',
          end:'top 40%'
        }
      })
      gsap.from('#page2Text2>h1>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text2',
          scrub:1,
          start:'top 60%',
          end:'top 30%'
        }
      })
    }
  
    document.querySelector('#page2>img').setAttribute('data-scroll-speed','0')
    document.querySelector('#footerLBg').setAttribute('data-scroll-speed','0')
    page2Anime();
  }
  else{
  
    function loading(){
      var tl = gsap.timeline()
      .from('#loadingLogo',{
        opacity:0,
        duration:1.5,
        repeat:1,
      })
      .to('#loadingLogo',{
        rotate:'360deg',
        top:"10%"
      })
      .to('#loading',{
        opacity:0,
        zIndex:'-1'
      })
      .to('html,body',{
        height:'100%',
      })
    }
    loading();
  
  
  
    Shery.mouseFollower();
    Shery.makeMagnet("#navR,#page1ScrollToDiscover,.brand,.btnAnime,.sm" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  
    function page2Anime(){
      gsap.to('#fLC1',{
        transform:'translateX(0%)',
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2',
          scrub:1,
          start:'top 30%',
          end:'top 30%'
        }
      })
      gsap.from('#page2>h1>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2',
          scrub:1,
          start:'top 40%',
          end:'top 10%'
        }
      })
      gsap.from('#page2Text1>h3>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text1',
          scrub:1,
          start:'top 40%',
          end:'top 20%'
        }
      })
      gsap.from('#page2Text1>h1>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text1',
          scrub:1,
          start:'top 20%',
          end:'top -30%'
        }
      })
      gsap.from('#page2Text2>h3>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text2',
          scrub:1,
          start:'top 40%',
          end:'top 20%'
        }
      })
      gsap.from('#page2Text2>h1>span',{
        opacity:0,
        stagger:.01,
        scrollTrigger:{
          scroller:'#main',
          trigger:'#page2Text2',
          scrub:1,
          start:'top 20%',
          end:'top -30%'
        }
      })
    }
  
    page2Anime();
  }
  page3Anime();
  page4Anime();
  page5Anime();
  page6Anime();
  page7Anime();
  footerAnime();
  
  
  