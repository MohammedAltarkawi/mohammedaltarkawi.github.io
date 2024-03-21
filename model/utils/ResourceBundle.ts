import ResourceBundle from 'sap/base/i18n/ResourceBundle';

/**
 * @namespace tvc.ui5.configurator.model.utils
 */
class ResourceBundlerAccessorDef {
    private _bndl: ResourceBundle;

    public init(bndl: ResourceBundle) {
        this._bndl = bndl;
    }

    public getText(text: string, parameter?: string[] | number[]): string {
        return this._bndl.getText(text, parameter);
    }
}

export const ResourceBundlerAccessor = new ResourceBundlerAccessorDef();