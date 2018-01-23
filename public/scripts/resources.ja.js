var uiResource = {
    toolBar: {
        zoom: {
            title: "ズーム",
            zoomOption: {
                twentyFivePercentSize: "25%",
                fiftyPercentSize: "50%",
                seventyFivePercentSize: "75%",
                defaultSize: "100%",
                oneHundredTwentyFivePercentSize: "125%",
                oneHundredFiftyPercentSize: "150%",
                twoHundredPercentSize: "200%",
                threeHundredPercentSize: "300%",
                fourHundredPercentSize: "400%"
            }
        },
        clear: {
            title: "クリア",
            clearActions: {
                clearAll: "すべてクリア",
                clearFormat: "書式をクリア"
            }
        },
        export: {
            title: "エクスポート",
            exportActions: {
                exportJson: "JSONデータとしてエクスポート",
                exportExcel: "Excelファイルとしてエクスポート"
            }
        },
        downloadTitle: "ファイルの保存",
        download: "右クリックしてファイルを別名保存...",
        showInspector: "インスペクタを表示",
        hideInspector: "インスペクタを非表示",
        importJson: "JSONデータをインポート",
        importFile: "ファイルを開く",
        insertTable: "テーブルを挿入",
        insertPicture: "ピクチャを挿入",
        insertComment: "コメントを挿入",
        insertSparkline: "スパークラインを挿入",
        insertSlicer: "スライサーを挿入"
    },
    tabs: {
        spread: "スプレッド",
        sheet: "シート",
        cell: "セル",
        table: "テーブル",
        data: "データ",
        comment: "コメント",
        picture: "ピクチャ",
        sparklineEx: "スパークライン",
        slicer: "スライサー"
    },
    spreadTab: {
        general: {
            title: "全体",
            allowDragDrop: "ドラッグ & ドロップを許可",
            allowDragFill: "ドラッグフィルを許可",
            allowZoom: "ズームを許可",
            allowOverfolow: "オーバーフローを許可",
            showDragFillSmartTag: "ドラッグフィル用のスマートタグを表示"
        },
        calculation: {
            title: "数式",
            referenceStyle: {
                title: "参照スタイルの設定",
                r1c1: "R1C1",
                a1: "A1"
            }
        },
        scrollBar: {
            title: "スクロールバー",
            showVertical: "垂直スクロールバーを表示",
            showHorizontal: "水平スクロールバーを表示",
            maxAlign: "セル外の領域を非表示",
            showMax: "シートの行列数を基にバーを表示",
            scrollIgnoreHidden: "非表示行列を無視してバーを表示"
        },
        tabStip: {
            title: "タブストリップ",
            visible: "タブストリップを表示",
            newTabVisible: "ユーザーによるタブの追加を許可",
            editable: "ユーザーによるタブの編集を許可",
            showTabNavigation: "タブナビゲーションを表示"
        },
        color: {
            title: "色の設定",
            spreadBackcolor: "背景色",
            grayAreaBackcolor: "グレー領域の表示色"
        },
        tip: {
            title: "チップの表示",
            showDragDropTip: "ドラッグ & ドロップ チップ",
            showDragFillTip: "ドラッグフィル チップ",
            scrollTip: {
                title: "スクロールチップ",
                values: {
                    none: "なし",
                    horizontal: "水平",
                    vertical: "垂直",
                    both: "水平・垂直"
                }
            },
            resizeTip: {
                title: "リサイズチップ",
                values: {
                    none: "なし",
                    column: "列",
                    row: "行",
                    both: "行・列"
                }
            }
        },
        sheets: {
            title: "シートの表示・非表示",
            sheetName: "シート名",
            sheetVisible: "上記のシート表示をON"
        },
        cutCopy: {
            title: "切り取り / コピー",
            cutCopyIndicator: {
                visible: "インジケータを表示",
                borderColor: "インジケータの色"
            },
            allowCopyPasteExcelStyle: "エクセル書式のコピーを許可",
            allowExtendPasteRange: "シートを拡張して貼り付け",
            copyPasteHeaderOptions: {
                title: "ヘッダオプション",
                option: {
                    noHeaders: "ヘッダなし",
                    rowHeaders: "行ヘッダのみ",
                    columnHeaders: "列ヘッダのみ",
                    allHeaders: "すべてのヘッダ"
                }
            }
        },
        spreadTheme: {
            title: "テーマの設定",
            theme:{
                title: "テーマ",
                option: {
                    spreadJS: "SpreadJS",
                    excel2013White: "Excel2013 White",
                    excel2013LightGray: "Excel2013 Light Gray",
                    excel2013DarkGray: "Excel2013 Dark Gray",
                    excel2016Colorful: "Excel2016 Colorful",
                    excel2016DarkGray: "Excel2016 Dark Gray"
                }
            }
        },
        resizeZeroIndicator: {
            title: "非表示列の強調",
            option: {
                defaultValue: "なし",
                enhanced: "強調"
            }
        }
    },
    sheetTab: {
        general: {
            title: "全体",
            rowCount: "行",
            columnCount: "列",
            name: "シート名",
            tabColor: "シートタブの色"
        },
        freeze: {
            title: "行・列の固定",
            frozenRowCount: "固定する行数",
            frozenColumnCount: "固定する列数",
            trailingFrozenRowCount: "固定する末尾行の数",
            trailingFrozenColumnCount: "固定する末尾列の数",
            frozenLineColor: "固定線の色",
            freezePane: "現在位置で固定",
            unfreeze: "固定を解除"
        },
        gridLine: {
            title: "グリッド線",
            showVertical: "垂直グリッド線を表示",
            showHorizontal: "水平グリッド線を表示",
            color: "枠線の色"
        },
        header: {
            title: "ヘッダ",
            showRowHeader: "行ヘッダを表示",
            showColumnHeader: "列ヘッダを表示"
        },
        selection: {
            title: "範囲選択",
            borderColor: "枠線の色",
            backColor: "背景の色",
            hide: "範囲選択の表示を隠す",
            policy: {
                title: "選択ポリシー",
                values: {
                    single: "単一",
                    range: "単一範囲",
                    multiRange: "複数範囲"
                }
            },
            unit: {
                title: "選択単位",
                values: {
                    cell: "セルごと",
                    row: "行ごと",
                    column: "列ごと"
                }
            }
        },
        protection: {
            title: "保護",
            protectSheet: "シートを保護",
            selectLockCells: "ロックされたセル選択を許可",
            selectUnlockedCells: "ロックされていないセル選択を許可",
            sort: "ソートを許可",
            useAutoFilter: "オートフィルタの使用を許可",
            resizeRows: "行のリサイズを許可",
            resizeColumns: "列のリサイズを許可",
            editObjects: "オブジェクトの編集を許可"
        }
    },
    cellTab: {
        style: {
            title: "スタイル",
            fontFamily: "フォント",
            fontSize: "サイズ",
            foreColor: "前景色",
            backColor: "背景色",
            waterMark: "ラベル",
            cellPadding: "パディング",
            cellLabel: {
                title: "ラベルオプション",
                visibility: "表示",
                visibilityOption: {
                    auto: "自動",
                    visible: "表示",
                    hidden: "非表示"
                },
                alignment: "位置",
                alignmentOption: {
                    topLeft: "Top Left",
                    topCenter: "Top Center",
                    topRight: "Top Right",
                    bottomLeft: "Bottom Left",
                    bottomCenter: "Bottom Center",
                    bottomRight: "Bottom Right"
                },
                fontFamily: "フォント",
                fontSize: "サイズ",
                foreColor: "前傾食",
                labelMargin: "マージン"
            },
            borders: { 
                title: "罫線",
                values: {
                    bottom: "下罫線",
                    top: "上罫線",
                    left: "左罫線",
                    right: "右罫線",
                    none: "枠なし",
                    all: "格子",
                    outside: "外枠",
                    thick: "外枠太罫線",
                    doubleBottom: "下二重罫線",
                    thickBottom: "下太罫線",
                    topBottom: "上罫線 + 下罫線",
                    topThickBottom: "上罫線 + 下太罫線",
                    topDoubleBottom: "上罫線 + 下二重罫線"
                }
            }
        },
        border: {
            title: "罫線",
            rangeBorderLine: "線",
            rangeBorderColor: "色",
            noBorder: "枠なし",
            outsideBorder: "外枠",
            insideBorder: "内側",
            allBorder: "格子",
            leftBorder: "左罫線",
            innerVertical: "内側（垂直）",
            rightBorder: "右罫線",
            topBorder: "上罫線",
            innerHorizontal: "内側（水平）",
            bottomBorder: "下罫線"
        },
        alignment: {
            title: "配置",
            top: "上詰め",
            middle: "中央揃え",
            bottom: "下詰め",
            left: "左詰め",
            center: "中央揃え",
            right: "右詰め",
            wrapText: "折り返して全体を表示する",
            decreaseIndent: "インデントを減らす",
            increaseIndent: "インデントを増やす"
        },
        format: {
            title: "表示形式",
            commonFormat: {
                option: {
                    general: "標準",
                    number: "数値",
                    currency: "通貨",
                    accounting: "会計",
                    shortDate: "短い日付形式",
                    longDate: "長い日付形式",
                    time: "時刻",
                    percentage: "パーセンテージ",
                    fraction: "分数",
                    scientific: "指数",
                    text: "文字列"
                }
            },
            percentValue: "0%",
            commaValue: "#,##0.00; (#,##0.00); \"-\"??;@",
            custom: "ユーザー定義",
            setButton: "設定"
        },
        merge: {
            title: "結合",
            mergeCells: "セルを結合",
            unmergeCells: "結合を解除"
        },
        cellType: {
            title: "セル型"
        },
        conditionalFormat: {
            title: "条件付き書式",
            useConditionalFormats: "条件付き書式"
        },
        protection: {
            title: "保護",
            lock: "ロック",
            sheetIsProtected: "シートは現在、保護状態です",
            sheetIsUnprotected: "シートは現在、保護されていません"
        }
    },
    tableTab: {
        tableStyle: {
            title: "テーブルスタイル",
            light: {
                light1: "淡色1",
                light2: "淡色2",
                light3: "淡色3",
                light7: "淡色7"
            },
            medium: {
                medium1: "中間1",
                medium2: "中間2",
                medium3: "中間3",
                medium7: "中間7"
            },
            dark: {
                dark1: "濃色1",
                dark2: "濃色2",
                dark3: "濃色3",
                dark7: "濃色7"
            }
        },
        general: {
            title: "全般",
            tableName: "テーブル名"
        },
        options: {
            title: "オプション",
            filterButton: "フィルタボタンを表示",
            headerRow: "行ヘッダを表示",
            totalRow: "集計行を表示",
            bandedRows: "交互行を設定",
            bandedColumns: "交互列を設定",
            firstColumn: "第一列を強調表示",
            lastColumn: "末尾列を強調表示"
        }
    },
    dataTab: {
        sort: {
            title: "並べ替えとフィルタ",
            asc: "昇順",
            desc: "降順",
            filter: "フィルタ"
        },
        group: {
            title: "グループ",
            group: "グループ化",
            ungroup: "グループ化解除",
            showDetail: "詳細を表示",
            hideDetail: "詳細を非表示",
            showRowOutline: "アウトラインを表示（行）",
            showColumnOutline: "アウトラインを表示（列）"
        },
        dataValidation: {
            title: "データ検証",
            setButton: "設定",
            clearAllButton: "全てクリア",
            circleInvalidData: "無効なデータをサークルで囲む",
            setting: {
                title: "設定",
                values: {
                    validatorType: {
                        title: "検証の種類",
                        option: {
                            anyValue: "すべての値",
                            number: "整数",
                            list: "リスト",
                            formulaList: "数式リスト",
                            date: "日付",
                            textLength: "文字列（長さ指定）",
                            custom: "ユーザー設定"
                        }
                    },
                    ignoreBlank: "空白を無視する",
                    validatorComparisonOperator: {
                        title: "データ",
                        option: {
                            between: "値が以下の間にある",
                            notBetween: "値が以下の間にない",
                            equalTo: "値が以下の値と等しい",
                            notEqualTo: "値が以下の値と等しくない",
                            greaterThan: "値が以下の値より大きい",
                            lessThan: "値が以下の値より小さい",
                            greaterThanOrEqualTo: "値が以下の値以上",
                            lessThanOrEqualTo: "値が以下の値以下"
                        }
                    },
                    number: {
                        minimum: "最小値",
                        maximum: "最大値",
                        value: "値",
                        isInteger: "整数として設定"
                    },
                    source: "元の値",
                    date: {
                        startDate: "次の日付から",
                        endDate: "次の日付まで",
                        value: "日付",
                        isTime: "時刻として設定"
                    },
                    formula: "数式"
                }
            },
            inputMessage: {
                title: "入力時メッセージ",
                values: {
                    showInputMessage: "セルの選択時にメッセージを表示する",
                    title: "タイトル",
                    message: "メッセージ"
                }
            },
            errorAlert: {
                title: "エラーメッセージ",
                values: {
                    showErrorAlert: "無効な値が入力されたらメッセージを表示する",
                    alertType: {
                        title: "スタイル",
                        option: {
                            stop: "停止",
                            warning: "警告",
                            information: "情報"
                        }
                    },
                    title: "タイトル",
                    message: "メッセージ"
                }
            }
        }
    },
    commentTab: {
        general: {
            title: "全体",
            dynamicSize: "動的なサイズ変更を許可",
            dynamicMove: "動的な移動を許可",
            lockText: "コメントをロック",
            showShadow: "影を表示"
        },
        font: {
            title: "フォント",
            fontFamily: "フォント",
            fontSize: "サイズ",
            fontStyle: {
                title: "スタイル",
                values: {
                    normal: "標準",
                    italic: "イタリック",
                    oblique: "斜体",
                    inherit: "継承"
                }
            },
            fontWeight: {
                title: "太さ",
                values: {
                    normal: "標準",
                    bold: "太字",
                    bolder: "bolder",
                    lighter: "lighter"
                }
            },
            textDecoration: {
                title: "文字飾り",
                values: {
                    none: "なし",
                    underline: "下線",
                    overline: "取り消し線",
                    linethrough: "上線"
                }
            }
        },
        border: {
            title: "線",
            width: "太さ",
            style: {
                title: "スタイル",
                values: {
                    none: "なし",
                    hidden: "hidden",
                    dotted: "点線",
                    dashed: "破線",
                    solid: "実線",
                    double: "二重線",
                    groove: "groove",
                    ridge: "ridge",
                    inset: "inset",
                    outset: "outset"
                }
            },
            color: "色"
        },
        appearance: {
            title: "外観",
            horizontalAlign: {
                title: "横位置",
                values: {
                    left: "左詰め",
                    center: "中央揃え",
                    right: "右詰め",
                    general: "自動"
                }
            },
            displayMode: {
                title: "表示形式",
                values: {
                    alwaysShown: "常に表示",
                    hoverShown: "マウスオーバーした場合のみ表示"
                }
            },
            foreColor: "前景色",
            backColor: "背景色",
            padding: "パディング",
            zIndex: "Z インデックス",
            opacity: "不透明度"
        }
    },
    pictureTab: {
        general: {
            title: "全体",
            moveAndSize: "セルに合わせて移動やサイズ変更をする",
            moveAndNoSize: "セルに合わせて移動するがサイズ変更はしない",
            noMoveAndSize: "セルに合わせて移動やサイズ変更をしない",
            fixedPosition: "ロック"
        },
        border: {
            title: "線",
            width: "幅",
            radius: "頂点の角度",
            style: {
                title: "スタイル",
                values: {
                    solid: "実線",
                    dotted: "点線",
                    dashed: "破線",
                    double: "二重線",
                    groove: "groove",
                    ridge: "ridge",
                    inset: "inset",
                    outset: "outset"
                }
            },
            color: "色"
        },
        appearance: {
            title: "外観",
            stretch: {
                title: "伸縮設定",
                values: {
                    stretch: "領域に合わせて表示",
                    center: "領域中央に表示",
                    zoom: "縦横比を維持して表示",
                    none: "元サイズで表示"
                }
            },
            backColor: "背景色"
        }
    },
    sparklineExTab: {
        pieSparkline: {
            title: "円スパークラインの設定",
            values: {
                percentage: "データ範囲",
                color: "色",
                setButton: "設定"
            }
        },
        areaSparkline: {
            title: "面スパークラインの設定",
            values: {
                line1: "第一水平線の値",
                line2: "第二水平線の値",
                minimumValue: "最小値",
                maximumValue: "最大値",
                points: "データ範囲",
                positiveColor: "色（正の値）",
                negativeColor: "色（負の値）",
                setButton: "設定"
            }
        },
        boxplotSparkline: {
            title: "ボックスプロットスパークラインの設定",
            values: {
                points: "データ範囲",
                boxplotClass: "クラス",
                scaleStart: "スケールの下限値",
                scaleEnd: "スケールの上限値",
                acceptableStart: "許容範囲の最小値",
                acceptableEnd: "許容範囲の最大値",
                colorScheme: "色",
                style: "スタイル",
                showAverage: "平均値の表示",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        bulletSparkline: {
            title: "ブレットスパークラインの設定",
            values: {
                measure: "計測値",
                target: "目標値",
                maxi: "最大値",
                forecast: "予測値",
                good: "良好値",
                bad: "不十分値",
                tickunit: "目盛単位",
                colorScheme: "配色基準色",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        cascadeSparkline: {
            title: "カスケードスパークラインの設定",
            values: {
                pointsRange: "データ範囲",
                pointIndex: "データインデックス",
                minimum: "最小値",
                maximum: "最大値",
                positiveColor: "色（正の値）",
                negativeColor: "色（負の値）",
                labelsRange: "ラベルの範囲",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        compatibleSparkline: {
            title: "スパークラインの設定",
            values: {
                data: {
                    title: "データ範囲",
                    dataOrientation: "スパークラインの方向",
                    dateAxisData: "軸データ範囲",
                    dateAxisOrientation: "軸の方向",
                    displayEmptyCellAs: "空白セルの取り扱い",
                    showDataInHiddenRowOrColumn: "非表示行・列のデータを表示"
                },
                show: {
                    title: "表示",
                    showFirst: "始点の強調",
                    showLast: "終点の強調",
                    showHigh: "頂点（山）の強調",
                    showLow: "頂点（谷）の強調",
                    showNegative: "マイナス値の強調",
                    showMarkers: "マーカーの強調"
                },
                group: {
                    title: "グループ設定",
                    minAxisType: "最小値のタイプ",
                    maxAxisType: "最大値のタイプ",
                    manualMin: "縦軸の最小値",
                    manualMax: "縦軸の最大値",
                    rightToLeft: "右から左に表示",
                    displayXAxis: "水平軸の表示"
                },
                style: {
                    title: "スタイル",
                    negative: "負の値",
                    markers: "マーカー",
                    axis: "軸",
                    series: "系列",
                    highMarker: "頂点（山）",
                    lowMarker: "頂点（谷）",
                    firstMarker: "始点",
                    lastMarker: "終点",
                    lineWeight: "線の太さ"
                },
                setButton: "設定"
            }
        },
        hbarSparkline: {
            title: "水平バースパークラインの設定",
            values: {
                value: "値（またはセル参照）",
                colorScheme: "色",
                setButton: "設定"
            }
        },
        vbarSparkline: {
            title: "垂直バースパークラインの設定",
            values: {
                value: "値（またはセル参照）",
                colorScheme: "色",
                setButton: "設定"
            }
        },
        paretoSparkline: {
            title: "パレートスパークラインの設定",
            values: {
                points: "データ範囲",
                pointIndex: "データインデックス",
                colorRange: "色データ範囲",
                highlightPosition: "ハイライトインデックス",
                target: "第一目標線",
                target2: "第二目標線",
                label: "ラベル表示",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        pieSparkline: {
            title: "円スパークラインの設定",
            values: {
                percentage: "データ範囲",
                color: "色",
                setButton: "設定"
            }
        },
        scatterSparkline: {
            title: "散布図スパークラインの設定",
            values: {
                points1: "データ範囲1",
                points2: "データ範囲2",
                minX: "X軸の下限値",
                maxX: "X軸の上限値",
                minY: "Y軸の下限値",
                maxY: "Y軸の上限値",
                hLine: "水平軸の位置",
                vLine: "垂直軸の位置",
                xMinZone: "灰色領域の下限値X",
                xMaxZone: "灰色領域の上限値X",
                yMinZone: "灰色領域の下限値Y",
                yMaxZone: "灰色領域の上限値Y",
                color1: "データ系列1の色",
                color2: "データ系列2の色",
                tags: "最小/最大値を強調",
                drawSymbol: "データ点を強調",
                drawLines: "データ線を描画",
                dashLine: "データ線を点線で描画",
                setButton: "設定"
            }
        },
        spreadSparkline: {
            title: "スプレッドスパークラインの設定",
            values: {
                points: "データ範囲",
                scaleStart: "最小値",
                scaleEnd: "最大値",
                style: "スタイル",
                colorScheme: "色",
                showAverage: "平均値の表示",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        stackedSparkline: {
            title: "積み上げスパークラインの設定",
            values: {
                points: "データ範囲",
                colorRange: "色データ範囲",
                labelRange: "ラベルの範囲",
                maximum: "最大値",
                targetRed: "目標線（赤）の位置",
                targetGreen: "目標線（緑）の位置",
                targetBlue: "目標線（青）の位置",
                targetYellow: "目標線（黄）の位置",
                color: "色",
                highlightPosition: "強調表示データの番号",
                textOrientation: "ラベルの向き",
                textSize: "ラベルのサイズ",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        variSparkline: {
            title: "バリスパークラインの設定",
            values: {
                variance: "値（またはセル参照）",
                reference: "参照線の値",
                mini: "最小値",
                maxi: "最大値",
                mark: "マーク線の位置",
                tickunit: "目盛単位",
                colorPositive: "色（正の値）",
                colorNegative: "色（負の値）",
                legend: "凡例テキスト表示",
                vertical: "垂直表示",
                setButton: "設定"
            }
        },
        monthSparkline: {
            title: "月スパークラインの設定"
        },
        yearSparkline: {
            title: "年スパークラインの設定"
        },
        monthYear: {
            data: "データ範囲",
            month: "月",
            year: "年",
            emptyColor: "色（データなし）",
            startColor: "色（開始）",
            middleColor: "色（途中）",
            endColor: "色（終了）",
            colorRange: "色の範囲",
            setButton: "設定"
        },
        orientation: {
            vertical: "垂直",
            horizontal: "水平"
        },
        axisType:   {
            individual: "個別に自動計算",
            custom: "カスタム"
        },
        emptyCellDisplayType: {
            gaps: "空白",
            zero: "ゼロ",
            connect: "前後で接続"
        },
        boxplotClass: {
            fiveNS: "5NS",
            sevenNS: "7NS",
            tukey: "Tukey",
            bowley: "Bowley",
            sigma: "Sigma3"
        },
        boxplotStyle: {
            classical: "Classical",
            neo: "Neo"
        },
        paretoLabel: {
            none: "なし",
            single: "単一(%)",
            cumulated: "累積(%)"
        },
        spreadStyle: {
            stacked: "Stacked",
            spread: "Spread",
            jitter: "Jitter",
            poles: "Poles",
            stackedDots: "StackedDots",
            stripe: "Stripe"
        }
    },
    slicerTab: {
        slicerStyle: {
            title: "スタイル",
            light: {
                light1: "淡色1",
                light2: "淡色2",
                light3: "淡色3",
                light5: "淡色5",
                light6: "淡色6"
            },
            dark: {
                dark1: "濃色1",
                dark2: "濃色2",
                dark3: "濃色3",
                dark5: "濃色5",
                dark6: "濃色6"
            }
        },
        general: {
            title: "全体の設定",
            name: "名前",
            captionName: "キャプション",
            itemSorting: {
                title: "項目のソート",
                option: {
                    none: "なし",
                    ascending: "昇順",
                    descending: "降順"
                }
            },
            displayHeader: "ヘッダを表示"
        },
        layout: {
            title: "レイアウト",
            columnNumber: "列数",
            buttonHeight: "ボタンの高さ",
            buttonWidth: "ボタンの幅"
        },
        property: {
            title: "プロパティ",
            moveAndSize: "セルに合わせて移動やサイズ変更をする",
            moveAndNoSize: "セルに合わせて移動するがサイズ変更はしない",
            noMoveAndSize: "セルに合わせて移動やサイズ変更をしない",
            locked: "ロック"
        }
    },
    colorPicker: {
        themeColors: "テーマの色",
        standardColors: "標準の色",
        noFills: "塗りつぶしなし"
    },
    conditionalFormat: {
        setButton: "設定",
        ruleTypes: {
            title: "種類",
            highlightCells: {
                title: "セルの強調表示ルール",
                values: {
                    cellValue: "セル値",
                    specificText: "文字列",
                    dateOccurring: "日付",
                    unique: "一意の値",
                    duplicate: "重複する値"
                }
            },
            topBottom: {
                title: "上位/下位ルール",
                values: {
                    top10: "上位/下位 n 項目",
                    average: "平均"
                }
            },
            dataBars: { 
                title: "データバー",
                labels: {
                    minimum: "最小値",
                    maximum: "最大値",
                    type: "種類",
                    value: "値",
                    appearance: "バーの外観",
                    showBarOnly: "棒のみ表示",
                    useGradient: "グラデーション",
                    showBorder: "枠線を表示",
                    barDirection: "棒の方向",
                    negativeFillColor: "負の値の色",
                    negativeBorderColor: "負の枠線色",
                    axis: "軸",
                    axisPosition: "位置",
                    axisColor: "色"
                },
                valueTypes: {
                    number: "数値",
                    lowestValue: "最小値",
                    highestValue: "最大値",
                    percent: "パーセント",
                    percentile: "百分位",
                    automin: "自動",
                    automax: "自動",
                    formula: "数式"
                },
                directions: {
                    leftToRight: "左から右",
                    rightToLeft: "右から左"
                },
                axisPositions: {
                    automatic: "自動",
                    cellMidPoint: "セルの中間",
                    none: "変更なし"
                }
            },
            colorScales: {
                title: "カラースケール",
                labels: {
                    minimum: "最小値",
                    midpoint: "中間値",
                    maximum: "最大値",
                    type: "種類",
                    value: "値",
                    color: "色"
                },
                values: {
                    twoColors: "2色スケール",
                    threeColors: "3色スケール"
                },
                valueTypes: {
                    number: "数値",
                    lowestValue: "最小値",
                    highestValue: "最大値",
                    percent: "パーセント",
                    percentile: "百分位",
                    formula: "数式"
                }
            },
            iconSets: {
                title: "アイコンセット",
                labels: {
                    style: "スタイル",
                    showIconOnly: "アイコンのみ表示",
                    reverseIconOrder: "アイコンの順序を逆にする",

                },
                types: {
                    threeArrowsColored: "方向 - 矢印（三方向）",
                    threeArrowsGray: "方向 - 矢印（三方向 / 灰色）",
                    threeTriangles: "方向 - 三角",
                    threeStars: "評価 - 三段階（星）",
                    threeFlags: "インジケーター - 旗",
                    threeTrafficLightsUnrimmed: "図形 - 信号（三色 / 縁なし）",
                    threeTrafficLightsRimmed: "図形 - 信号（三色 / 縁あり）",
                    threeSigns: "図形 - 円 / 三角 / ダイヤ",
                    threeSymbolsCircled: "インジケーター - チェック / ！ / ×シンボル（円形）",
                    threeSymbolsUncircled: "インジケーター - チェック / ！ / ×シンボル（非円形）",
                    fourArrowsColored: "方向 - 矢印（四方向）",
                    fourArrowsGray: "方向 - 矢印（四方向 / 灰色）",
                    fourRedToBlack: "図形 - 円（四色 / 赤 - 黒）",
                    fourRatings: "評価 - 四段階（棒）",
                    fourTrafficLights: "図形 - 信号（四色）",
                    fiveArrowsColored: "方向 - 矢印（五方向）",
                    fiveArrowsGray: "方向 - 矢印（五方向 / 灰色）",
                    fiveRatings: "評価 - 五段階（円）",
                    fiveQuarters: "評価 - 五段階（棒）",
                    fiveBoxes: "評価 - 五段階（四角）"
                },
                valueTypes: {
                    number: "数値",
                    percent: "パーセント",
                    percentile: "百分位",
                    formula: "数式"
                }
            },
            removeConditionalFormat: {
                title: "なし"
            }
        },
        operators: {
            cellValue: {
                types: {
                    equalsTo: "次の値と等しい",
                    notEqualsTo: "次の値と等しくない",
                    greaterThan: "次の値より大きい",
                    greaterThanOrEqualsTo: "次の値以上",
                    lessThan: "次の値より小さい",
                    lessThanOrEqualsTo: "次の値以下",
                    between: "次の値の間",
                    notBetween: "次の値の間でない"
                }
            },
            specificText: {
                types: {
                    contains: "次の値を含む",
                    doesNotContain: "次の値を含まない",
                    beginsWith: "次の値で始まる",
                    endsWith: "次の値で終わる"
                }
            },
            dateOccurring: {
                types: {
                    today: "今日",
                    yesterday: "昨日",
                    tomorrow: "明日",
                    last7Days: "過去7日間",
                    thisMonth: "今月",
                    lastMonth: "先月",
                    nextMonth: "来月",
                    thisWeek: "今週",
                    lastWeek: "先週",
                    nextWeek: "来週"
                }
            },
            top10: {
                types: {
                    top: "上位",
                    bottom: "下位"
                }
            },
            average: {
                types: {
                    above: "より上",
                    below: "より下",
                    equalOrAbove: "以上",
                    equalOrBelow: "以下",
                    above1StdDev: "より1標準偏差上",
                    below1StdDev: "より1標準偏差下",
                    above2StdDev: "より2標準偏差上",
                    below2StdDev: "より2標準偏差下",
                    above3StdDev: "より3標準偏差上",
                    below3StdDev: "より3標準偏差下"
                }
            }
        },
        texts: {
            cells: "以下の条件に該当するセルを書式設定する:",
            rankIn: "次に入る値を書式設定:",
            inRange: "選択範囲内",
            values: "次の値を書式設定:",
            average: "選択範囲の平均値",
            allValuesBased: "セルの値に基づいてすべてのセルを書式設定:",
            all: "すべての値を書式設定:",
            and: "と",
            formatStyle: "スタイル設定",
            showIconWithRules: "次のルールに従って各アイコンを表示:"
        },
        formatSetting: {
            formatUseBackColor: "背景色",
            formatUseForeColor: "前景色",
            formatUseBorder: "枠線色"
        }
    },
    cellTypes: {
        title: "セル型",
        buttonCellType: {
            title: "ボタン型セル",
            values: {
                marginTop: "マージン（上）",
                marginRight: "マージン（右）",
                marginBottom: "マージン（下）",
                marginLeft: "マージン（左）",
                text: "文字列",
                backColor: "背景色"
            }
        },
        checkBoxCellType: {
            title: "チェックボックス型セル",
            values: {
                caption: "キャプション",
                textTrue: "テキスト（チェック時）",
                textIndeterminate: "テキスト（不定時）",
                textFalse: "テキスト（未チェック時）",
                textAlign: {
                    title: "テキストの位置",
                    values: {
                        top: "上",
                        bottom: "下",
                        left: "左",
                        right: "右"
                    }
                },
                isThreeState: "スリーステートを有効にする"
            }
        },
        comboBoxCellType: {
            title: "コンボボックス型セル",
            values: {
                editorValueType: {
                    title: "エディタ値の種類",
                    values: {
                        text: "テキスト値",
                        index: "インデックス値",
                        value: "データ値"
                    }
                },
                itemsText: "項目のテキスト値",
                itemsValue: "項目のデータ値"
            }
        },
        hyperlinkCellType: {
            title: "ハイパーリンク型セル",
            values: {
                linkColor: "リンクの色",
                visitedLinkColor: "表示済みリンクの色",
                text: "テキスト",
                linkToolTip: "リンクツールチップ"
            }
        },
        clearCellType: {
            title: "なし"
        },
        setButton: "設定"
    },
    sparklineDialog: {
        title: "スパークラインの設定",
        sparklineExType: {
            title: "種類",
            values: {
                line: "折れ線",
                column: "棒",
                winLoss: "勝敗",
                pie: "円",
                area: "面",
                scatter: "散布図",
                spread: "スプレッド",
                stacked: "積み上げ",
                bullet: "ブレット",
                hbar: "水平バー",
                vbar: "垂直バー",
                variance: "バリ",
                boxplot: "ボックスプロット",
                cascade: "カスケード",
                pareto: "パレート",
                month: "月",
                year: "年"
            }
        },
        lineSparkline: {
            dataRange: "データ範囲",
            locationRange: "スパークラインを設定するセル",
            dataRangeError: "データ範囲の指定に誤りがあります！",
            singleDataRange: "データ範囲は単一の行・列内になければなりません。",
            locationRangeError: "設定先の指定に誤りがあります！"
        },
        bulletSparkline: {
            measure: "計測値",
            target: "目標値",
            maxi: "最大値",
            forecast: "予測値",
            good: "良好値",
            bad: "不十分値",
            tickunit: "目盛単位",
            colorScheme: "配色基準色",
            vertical: "Vertical"
        },
        hbarSparkline: {
            value: "値（またはセル参照）",
            colorScheme: "色"
        },
        varianceSparkline: {
            variance: "値（またはセル参照）",
            reference: "参照線の値",
            mini: "最小値",
            maxi: "最大値",
            mark: "マーク線の位置",
            tickunit: "目盛単位",
            colorPositive: "色（正の値）",
            colorNegative: "色（負の値）",
            legend: "凡例テキスト表示",
            vertical: "垂直表示"
        },
        monthSparkline: {
            year: "年",
            month: "月",
            emptyColor: "色（データなし）",
            startColor: "色（開始）",
            middleColor: "色（途中）",
            endColor: "色（終了）",
            colorRange: "色の範囲"
        },
        yearSparkline: {
            year: "年",
            emptyColor: "色（データなし）",
            startColor: "色（開始）",
            middleColor: "色（途中）",
            endColor: "色（終了）",
            colorRange: "色の範囲"
        }
    },
    slicerDialog: {
        insertSlicer: "スライサーの挿入"
    },
    passwordDialog: {
        title: "パスワード",
        error: "パスワードに誤りがあるようです。"
    },
    tooltips: {
        style: {
            fontBold: "太字",
            fontItalic: "斜体",
            fontUnderline: "下線",
            fontOverline: "上線",
            fontLinethrough: "取り消し線"
        },
        alignment: {
            leftAlign: "左詰め",
            centerAlign: "中央揃え",
            rightAlign: "右詰め",
            topAlign: "上詰め",
            middleAlign: "中央揃え",
            bottomAlign: "下詰め",
            decreaseIndent: "インデントを減らす",
            increaseIndent: "インデントを増やす"
        },
        border: {
            outsideBorder: "外側",
            insideBorder: "内側",
            allBorder: "格子",
            leftBorder: "左罫線",
            innerVertical: "内側（垂直）",
            rightBorder: "右罫線",
            topBorder: "上罫線",
            innerHorizontal: "内側（水平）",
            bottomBorder: "下罫線"
        },
        format: {
            percentStyle: "パーセントスタイル",
            commaStyle: "桁区切りスタイル",
            increaseDecimal: "小数点以下の表示桁数を増やす",
            decreaseDecimal: "小数点以下の表示桁数を減らす"
        }
    },
    defaultTexts: {
        buttonText: "ボタン",
        checkCaption: "チェック",
        comboText: "日本,中国,米国",
        comboValue: "JP,CN,US",
        hyperlinkText: "リンク",
        hyperlinkToolTip: "リンクツールチップ"
    },
    messages: { 
        invalidImportFile: "無効なファイルです。インポートに失敗しました。",
        duplicatedSheetName: "すでに同じシート名が存在します。",
        duplicatedTableName: "すでに同じテーブル名が存在します。",
        rowColumnRangeRequired: "行または列範囲を選択してください。",
        imageFileRequired: "画像ファイルを選択してください。",
        duplicatedSlicerName: "すでに同じスライサー名が存在します。",
        invalidSlicerName: "無効なスライサー名です。"
    },
    contextMenu: {
        cutItem: "切り取り",
        copyItem: "コピー",
        pasteItem: "貼り付け",
        insertItem: "挿入",
        deleteItem: "削除",
        mergeItem: "結合",
        unmergeItem: "結合解除"
    },
    dialog: {
        ok: "OK",
        cancel: "キャンセル"
    }
};

//Change default theme body font from "Calibri" to "Meyryo"
function applyJPTheme(spread) {
    var theme = new GC.Spread.Sheets.Theme("jpCustomTheme", GC.Spread.Sheets.ThemeColors.Office, "Calibri Light", "Meiryo");
    if (spread) {
        spread.sheets.forEach(function (item) {
            item.currentTheme(theme);
        });
    }
}
