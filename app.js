/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'JT',

    extend: 'JT.Application',

    requires: [
        'JT.view.main.Main',
        'JT.Common'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'JT.view.main.Main',
    proxyHeaders: {'Authorization': 'Basic eW1hZHlhcm92OkluZ29kd2V0cnVzdDQh'}  
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to JT.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
