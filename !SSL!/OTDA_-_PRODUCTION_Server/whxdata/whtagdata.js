(function() {
var tagCombinations =  [["$"],["assets_action"],["caseworker_action"],["processing_center_action"],["cp_or_ncp_action"],["court_action"]] ,
  tags =  [{"display":"Who Completes This Action?","type":"group","children":[{"display":"ASSETS","name":"assets_action"},{"display":"PROCESSING CENTER","name":"processing_center_action"},{"display":"CP or NCP","name":"cp_or_ncp_action"},{"display":"CASEWORKER","name":"caseworker_action"},{"display":"COURT","name":"court_action"}]}],
  caption = "OTDA - PRODUCTION Server",
  type = "checkbox",
  defFilter = null;

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();