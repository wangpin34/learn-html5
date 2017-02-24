function addListener(element, type, listener){
  (element.addEventListener || element.attachEvent)
    .apply(element, 
    [ type, 
      function(event){
        listener(event||window.event)
      }
    ].concat(Object.values(arguments).slice(3))
  )
}

function removeListener(element, type, listener){
  (element.removeEventListener || element.detachEvent)(type, listener);
}