#### title

A *title* is a text type that is used in the largest true heading. A [display](#display) type must **not** be used as a "larger title". A *title* type would function as a page title perfectly well. Ideally, there would be a need for only one _title_; anything else should be able to fit on the [heading](#heading) and [subheading](#subheading) text types.

* Component
  ```html
<Text type="title">Alice’s Adventures in Wonderland</Text>
```
* Style
  ```css
span.title {
	font-size: 2.8rem;
	line-height: 3rem;
	font-weight: 600;
}
```
* Example with visible margins