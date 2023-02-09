#### title

A *title* is a text type that is used in the largest true heading and functions as a page title. It serves as a succinct description of the content and provides context to the user. It is an opportunity to create structure within the design and be representative of the content's identity and purpose. 
* There must only be one _title_ per page; anything else must be able to fit on the [heading](#heading) and [subheading](#subheading) text types.
* A [display](#display) type must **not** be used as a "larger title".

#### `[JSX]` Component
  ```html
<Text type="title">Alice’s Adventures in Wonderland</Text>
```
#### `[CSS]` Style
  ```css
span.title {
	font-size: 2.8rem;
	line-height: 3rem;
	font-weight: 600;
}
```

* Example with visible margins