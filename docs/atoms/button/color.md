### color

Primary buttons are typically used to initiate the main action in a user interface, such as submitting a form or confirming a purchase. They are usually designed to stand out and be highly visible to the user, making it clear what the most important action is. Examples of primary buttons might include _Submit_ or _Confirm_.

Secondary buttons are used for less important actions or for actions that are related to the main action but are not the primary focus. They might be used to cancel a form or to provide additional information. Examples of secondary buttons might include _Cancel_ or _Learn More_.

Tertiary buttons are used for actions that are less frequently used or for actions that are not as important as the primary or secondary actions. These buttons might be used to access advanced features or to provide additional information. Examples of tertiary buttons might include _Advanced Options_ or _Help_.

Disabled and error states are essential for a quality button element because they provide important feedback to the user. A disabled state is used to indicate that a button is not currently available for use, such as when a form is incomplete or when an action is not possible due to a system error. An error state is used to indicate that an error has occurred, such as when the user has entered incorrect information or when a system error has occurred. These states provide important information to the user, helping them understand the state of the system and what actions are possible at any given time.

* Component
  ```html
<Button color={props.color}>Submit</Button>
```
* Example