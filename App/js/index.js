// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block8")
                .setSpaceUnit("px")
                .setName("enviz_setup_tab")
                .setLeft("150px")
                .setTop("360px")
                .setWidth("640px")
                .setHeight("240px")
            );
            
            host.xui_ui_block8.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block13")
                .setLeft("-0.0761904761904762em")
                .setTop("-0.0761904761904762em")
                .setWidth("28.266666666666666em")
                .setHeight("11.504761904761905em")
            );
            
            host.xui_ui_block13.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox2")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "New",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "Existing",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setLeft("-0.0761904761904762em")
                .setTop("-0.0761904761904762em")
                .setWidth("28.266666666666666em")
                .setHeight("4.3428571428571425em")
                .setZIndex(1002)
                .setSelMode("multibycheckbox")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Recipe")
                .setLabelHAlign("left")
                .setCheckBox(true)
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        autoDestroy:false
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});