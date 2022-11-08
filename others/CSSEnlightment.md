# CSS Enlightment
### Absolute and Relative

Say you have this code

```html
<div class="parent" style="{ relative }">
    <div class="child" style="{ absolute }">
        Content
    </div>
</div>
```

Here, the content which is the child class, is absolute towards the parent which is relative    
So, the component itself is relative to the page (i.e. responsive, can be flexible in placement), but the content itself would stay put and be absolute in that parent component, thus, in Figma terms, you have a frame that has content, but the frame itself is responsive    

Eventhough the content is absolute, it is still relative because it follow suit the parent which is relative   

Using this info, you can create complex component which require absolute placement, but you can still have it to be responsive    

So, create a "frame" that will hold the content that is relative (hence responsive), then the content which is absolute