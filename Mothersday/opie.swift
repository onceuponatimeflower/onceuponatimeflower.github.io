import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {
    
    var webView: WKWebView!
    
    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 加載指定網頁
        let url = URL(string: "https://onceuponatimeflower.github.io/Mothersday/vase.html")!
        webView.load(URLRequest(url: url))
    }

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        // 檢查是否是用戶點擊連結
        if navigationAction.navigationType == .linkActivated {
            // 獲取點擊的連結
            if let url = navigationAction.request.url {
                // 在系統瀏覽器中打開連結
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
                return
            }
        }
        // 允許 WKWebView 加載其他連結
        decisionHandler(.allow)
    }
}
