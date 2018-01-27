# rating

```less
.score2 //1颗星
.score4 //2颗星
.score6 //3颗星
.score8 //4颗星
.score0 //5颗星
.rating //用于用户评分
```

```html
<div class="score2">
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
</div>
```

```html
<div class="rating">
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
</div>
```

```js
/* active */
$().rate();


/* active while adding some actions */
$().rating(1, ()=>{
    console.log('like');
});
```
