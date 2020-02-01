import React from 'react'

{/* <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-close-default">Default</button> */ }
{/* <ModelComponent closebtn="uk-modal-close-default" saveCloseBtn={false} containerModal={false}></ModelComponent> */ }

// uk-modal-close-outside - close button outside the modal box

export default function ModelComponent({ closebtn, saveCloseBtn, containerModal }) {

  return (
    <div>
      {containerModal ?
        <div id="modal-close-default" class="uk-modal-container" uk-modal="true">
          <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close="true"></button>
            <h2 class="uk-modal-title">Headline</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        : <div id="modal-close-default" uk-modal="true">
          <div class="uk-modal-dialog uk-modal-body">
            <button className={closebtn} type="button" uk-close="true"></button>
            <h2 class="uk-modal-title">Default</h2>
            <p>sadddwheicr23ceb32c 23 3cbrjc23 buds sdnfbusd</p>
            {saveCloseBtn ?
              <p class="uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                <button class="uk-button uk-button-primary" type="button">Save</button>
              </p>
              : null}
          </div>

        </div>}
    </div>
  )
}
