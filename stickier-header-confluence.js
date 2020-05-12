
// const STOP_AFTER = 3;

let interval = null;
let foundCount = 0;


// init
run();


/**
 * Do the thing
 */
function run() {
  console.log('⚙️ Running "Stickier header Confluence"');
  foundCount = 0;

  interval = setInterval(() => {
    disableConfluenceAnimatedHeader();
  }, 2000);
}


/**
 * disables the disappearing header so that it stays put.
 */
function disableConfluenceAnimatedHeader() {
  let element = null;

  find();

  function find() {
    console.log('🕵🏻‍♀️ Looking for the Confluence header... ');
    element = document.querySelector('[data-test-id="header-animated-box"]');

    if (element) {
      // console.log('❗️ Found it!', foundCount);
      element.style['animation-name'] = 'none';
      element.style['animation'] = 'none';
      element.style['animation-play-state'] = 'paused';
      foundCount++;
    }

    /**
     * Can't stop won't stop.
     * When navigating between pages I need this to still work so nope.
     * I had intentions of disabling it but Confluence is a SPA
     * so it requires some hackery I wasn't into taking the time to explore.
     */
    /* if (foundCount > STOP_AFTER) {
      clearInterval(interval);
    } */
  }
}

