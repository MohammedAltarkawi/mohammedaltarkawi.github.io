import { jobT } from "./types";
import { ResourceBundlerAccessor } from "./utils/ResourceBundle";


export const aJobsData = [

    { title: ResourceBundlerAccessor.getText('msgGroup'), 
    text: ResourceBundlerAccessor.getText('msgGroupText'), 
    role: ResourceBundlerAccessor.getText('msgGroupRole'),
    icon: 'sap-icon://education', link:'https://www.msg.group/' },

    { title: ResourceBundlerAccessor.getText('implico'), 
    text: ResourceBundlerAccessor.getText('implicoText'), 
    role: ResourceBundlerAccessor.getText('implicoRole'), 
    icon: 'sap-icon://education', link:'https://www.implico.com/' },

    { title: ResourceBundlerAccessor.getText('hauni'), 
    text: ResourceBundlerAccessor.getText('hauniText'), 
    role: ResourceBundlerAccessor.getText('hauniRole'),
     icon: 'sap-icon://building', link:'https://www.koerber-technologies.com/'}

] as jobT