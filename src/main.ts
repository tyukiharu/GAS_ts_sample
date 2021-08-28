function addSheet(): void {
    // コンテナバインド型で紐付いたスプレッドシート読み込み
    let mySheet = SpreadsheetApp.getActiveSpreadsheet();
    // 新規シート挿入
    let newSheet = mySheet.insertSheet();
    // 名前を設定
    newSheet.setName('Additional sheet');
}