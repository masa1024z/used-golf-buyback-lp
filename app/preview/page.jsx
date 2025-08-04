export default function Preview(){
  const COMPANY={
    name:"Kizuna Global合同会社",
    license:"千葉県公安委員会許可 第441010003157号",
    address:"千葉県千葉市中央区弁天1-15-3",
    phone:"090-2064-8418",
    email:"m_anada@kizuna-global.jp"
  };

  return (
    <div>
      <header style={{borderBottom:"1px solid #eee"}}>
        <div className="container"><strong>ゴルフクラブ買取（プレビュー）</strong></div>
      </header>
      <main>
        <section style={{background:"linear-gradient(90deg,#065f46,#064e3b)",color:"#fff",padding:"48px 0"}}>
          <div className="container" style={{display:"grid",gap:24,gridTemplateColumns:"1fr",alignItems:"center"}}>
            <div>
              <h1 style={{margin:"0 0 8px",fontSize:32,fontWeight:800}}>中古ゴルフクラブ、高く・速く・手間なく買い取ります。</h1>
              <p style={{margin:"0 0 16px",fontSize:18}}>写真で24h仮査定／到着翌営業日で本査定／承認後は翌営業日（T+1）入金</p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <a href="#form" className="btn btn-secondary">いますぐ無料査定</a>
                <a href="#kit" className="btn btn-primary">無料キットを申し込む</a>
              </div>
            </div>
            <img src="https://placehold.co/1200x600?text=GOLF+CLUBS" alt="golf clubs" style={{width:"100%",borderRadius:12}}/>
          </div>
        </section>

        <section id="form" className="container" style={{padding:"32px 0"}}>
          <h2>無料査定フォーム（デモ表示）</h2>
          <form action="/thanks" method="GET" style={{display:"grid",gap:12,maxWidth:640}}>
            <label>お名前*<br/><input name="name" required style={{width:"100%",padding:10,border:"1px solid #ddd",borderRadius:8}}/></label>
            <label>メール*<br/><input type="email" name="email" required style={{width:"100%",padding:10,border:"1px solid #ddd",borderRadius:8}}/></label>
            <label>モデル・番手・シャフト*<br/><textarea name="spec" required rows={4} style={{width:"100%",padding:10,border:"1px solid #ddd",borderRadius:8}}/></label>
            <small>※プレビュー専用のため、送信しても外部連携（メール/Sheets/画像保存）は行いません。</small>
            <button className="btn btn-primary" type="submit">この内容で確認（/thanksへ）</button>
          </form>
        </section>

        <section id="kit" className="container" style={{paddingBottom:32}}>
          <h3>無料宅配キット（デモ）</h3>
          <p>箱3サイズ・緩衝材・着払い伝票・梱包マニュアルをご用意します。</p>
        </section>

        <section id="faq" className="container" style={{padding: '32px 0'}}>
          <h2 style={{textAlign: 'center', marginBottom: '24px'}}>よくあるご質問</h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gap: '16px',
            padding: '0 16px'
          }}>
            <details style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <summary style={{
                padding: '16px',
                backgroundColor: '#f8fafc',
                cursor: 'pointer',
                fontWeight: '600',
                outline: 'none',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>査定はどのように行いますか？</span>
                <span style={{fontSize: '1.25rem'}}>+</span>
              </summary>
              <div style={{
                padding: '16px',
                backgroundColor: '#fff',
                borderTop: '1px solid #e2e8f0'
              }}>
                <p>写真を送っていただければ24時間以内に査定額をお知らせします。商品到着後、改めて本査定を実施し、査定額に納得いただけましたら買取成立となります。</p>
              </div>
            </details>

            <details style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <summary style={{
                padding: '16px',
                backgroundColor: '#f8fafc',
                cursor: 'pointer',
                fontWeight: '600',
                outline: 'none',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>送料はかかりますか？</span>
                <span style={{fontSize: '1.25rem'}}>+</span>
              </summary>
              <div style={{
                padding: '16px',
                backgroundColor: '#fff',
                borderTop: '1px solid #e2e8f0'
              }}>
                <p>当社負担の着払い伝票をお送りしますので、お客様の送料負担は一切ございません。無料の宅配キットもご用意しておりますので、お気軽にご利用ください。</p>
              </div>
            </details>

            <details style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <summary style={{
                padding: '16px',
                backgroundColor: '#f8fafc',
                cursor: 'pointer',
                fontWeight: '600',
                outline: 'none',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>入金はどのタイミングで行われますか？</span>
                <span style={{fontSize: '1.25rem'}}>+</span>
              </summary>
              <div style={{
                padding: '16px',
                backgroundColor: '#fff',
                borderTop: '1px solid #e2e8f0'
              }}>
                <p>お客様に査定額をご確認いただき、ご了承いただきましたら、即日で入金手続きをさせていただきます。通常、ご承認いただいてから翌営業日（T+1）以内にお振り込みいたします。</p>
              </div>
            </details>
          </div>
        </section>
      </main>

      <footer style={{background:"#111",color:"#fff",padding:"24px 0"}}>
        <div className="container" style={{display:"grid",gap:12}}>
          <div><strong>{COMPANY.name}</strong><div style={{fontSize:14}}>{COMPANY.license}</div></div>
          <div style={{fontSize:14}}>{COMPANY.address}</div>
          <div style={{fontSize:14}}>
            <a href={`tel:${COMPANY.phone.replace(/-/g,"")}`} style={{color:"#fff"}}>{COMPANY.phone}</a> ／
            <a href={`mailto:${COMPANY.email}`} style={{color:"#fff"}}>{COMPANY.email}</a>
          </div>
          <div style={{fontSize:13,opacity:.8}}>&copy; {new Date().getFullYear()} {COMPANY.name}</div>
        </div>
      </footer>
    </div>
  );
}
