import * as vscode from 'vscode';
import * as i18n from './../i18N';

/** User has to confirm if he wants to reload the editor */
export const showConfirmToReloadMessage = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {

        vscode.window.showInformationMessage(
            i18n.translate('confirmReload'),
            i18n.translate('reload')
        ).then(value => {
            switch (value) {
                case i18n.translate('reload'):
                    resolve(true);
                    break;

                default:
                    resolve(false);
                    break;
            }
        });
    });
};
