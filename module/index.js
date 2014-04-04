'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
//    camelModuleName: '',
//    capitalModuleName: '',
//    lowerModuleName: '',
    init: function () {
        console.log('Creating the module - ' + this.name);
    },

//    askFor: function () {
//        var done = this.async();
//
//        var prompts = [
//            {
//                type: 'confirm',
//                name: 'includeRest',
//                message: 'Do you want to include a REST-ful service, with basic controllers, and views?',
//                default: false
//            },
//        ];
//
//        this.prompt(prompts, function (props) {
//            this.includeRest = props.includeRest;
//
//            done();
//        }.bind(this));
//    },

    files: function () {
        this.projectName = this.config.get('projectName');
        this.camelModuleName = this._.camelize(this.name);
        this.capitalModuleName = this._.capitalize(this.name);
        this.lowerModuleName = this.name.toLowerCase();
        var modulePath = path.join('src', 'app', this.camelModuleName);
        this.mkdir(modulePath);
        this.template('_module.js', path.join(modulePath, this.camelModuleName + '.js'));
        this.template('_moduleSpec.js', path.join(modulePath, this.camelModuleName + '.spec.js'));
        this.template('_moduleHtml.tpl.html', path.join(modulePath, this.camelModuleName + '.tpl.html'));
        this.template('_module.less', path.join(modulePath, this.camelModuleName + '.less'));

//        if (this.includeRestfulService) {
//            // Add RESTful service stuff here
//        }
    }
});

module.exports = ModuleGenerator;