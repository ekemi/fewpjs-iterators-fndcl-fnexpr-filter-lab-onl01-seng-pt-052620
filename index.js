// Code your solution here
function findMatching(arr, st ){
  return arr.filter(function(n){
  return n.toLowerCase() ===st.toLowerCase() ;
})
};

function fuzzyMatch (arr, st) {
  return arr.filter (function(n){
    let v = 0
    return n.charAt(v) === st.charAt(v)
  })
}
