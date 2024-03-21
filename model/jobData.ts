import { jobT } from "./types";
import { ResourceBundlerAccessor } from "./utils/ResourceBundle";
import DateFormat from "sap/ui/core/format/DateFormat";


const fromHauni = new Date(2019, 0) 
const toHauni = new Date(2019, 6) 

const fromImplico = new Date(2019, 7) 
const toImplico = new Date(2022, 5) 

const fromMSGGroup = new Date(2022, 6) 



const getFormattedDate = (date: Date): string => {
    const dateFormat = DateFormat.getDateInstance({
        pattern: "MMM yyyy" 
    });
    
    return dateFormat.format(date);
};

export const aJobsData = [

    { title: ResourceBundlerAccessor.getText('msgGroup'), 
    text: ResourceBundlerAccessor.getText('msgGroupText', [getFormattedDate(fromMSGGroup)]), 
    role: ResourceBundlerAccessor.getText('msgGroupRole'),
    icon: 'sap-icon://building', link:'https://www.msg.group/' },

    { title: ResourceBundlerAccessor.getText('implico'), 
    text: ResourceBundlerAccessor.getText('implicoText', [getFormattedDate(fromImplico), getFormattedDate(toImplico)]), 
    role: ResourceBundlerAccessor.getText('implicoRole'), 
    icon: 'sap-icon://education', link:'https://www.implico.com/' },

    { title: ResourceBundlerAccessor.getText('hauni'), 
    text: ResourceBundlerAccessor.getText('hauniText', [getFormattedDate(fromHauni), getFormattedDate(toHauni)]), 
    role: ResourceBundlerAccessor.getText('hauniRole'),
     icon: 'sap-icon://education', link:'https://www.koerber-technologies.com/'}

] as jobT