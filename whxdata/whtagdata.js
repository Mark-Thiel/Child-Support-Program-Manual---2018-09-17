(function() {
var tagCombinations =  [["$"],["caseworker_action"],["ta_process"],["non_ta_process"],["assets_action"],["processing_center_action"],["cp_or_ncp_action"]] ,
  tags =  [{"display":"TA Process?  Non-TA Process?  Both?","type":"group","children":[{"display":"TA Process","name":"ta_process"},{"display":"NON-TA Process","name":"non_ta_process"}]},{"display":"Who Completes This Action?","type":"group","children":[{"display":"ASSETS","name":"assets_action"},{"display":"PROCESSING CENTER","name":"processing_center_action"},{"display":"CP or NCP","name":"cp_or_ncp_action"},{"display":"CASEWORKER","name":"caseworker_action"}]}],
  caption = "Filter by",
  type = "checkbox",
  defFilter = null;

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();