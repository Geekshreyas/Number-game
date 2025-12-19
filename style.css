:root{
  --bg-1:#eaf4ff;
  --bg-2:#f7fbff;
  --card:#ffffff;
  --accent:#1e6fd8;
  --accent-2:#3b82f6;
  --muted:#5f7f9f;
  --glass:rgba(255,255,255,0.7);
  --shadow:0 10px 30px rgba(30,111,216,0.08);
  --radius:12px;
}

*{
  box-sizing:border-box;
}

html,body{
  height:100%;
  margin:0;
  font-family:Inter,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  background:linear-gradient(180deg,var(--bg-1),var(--bg-2));
  color:#0b2540;
}

.wrapper{
  max-width:440px;
  margin:6vh auto;
  background:linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,251,255,0.9));
  border-radius:var(--radius);
  padding:28px;
  box-shadow:var(--shadow);
  border:1px solid rgba(30,111,216,0.06);
}

.wrapper h1{
  margin:0 0 6px 0;
  font-size:1.6rem;
  letter-spacing:-0.2px;
  color:var(--accent);
}

.wrapper p{
  margin:0 0 10px 0;
  color:var(--muted);
  font-size:0.95rem;
}

.form{
  display:flex;
  gap:10px;
  align-items:center;
  margin-top:12px;
  margin-bottom:14px;
}

label.guess{
  display:none;
}

.guessfield{
  flex:1 1 auto;
  padding:12px 14px;
  font-size:1rem;
  border-radius:10px;
  border:1px solid rgba(30,111,216,0.12);
  background:linear-gradient(180deg,#ffffff,#f6fbff);
  outline:none;
  transition:box-shadow .18s ease,border-color .18s ease,transform .06s ease;
}

.guessfield::placeholder{
  color:#9bb1d1;
}

.guessfield:focus{
  box-shadow:0 6px 18px rgba(59,130,246,0.12);
  border-color:var(--accent);
  transform:translateY(-1px);
}

.guesssubmit{
  flex:0 0 120px;
  padding:11px 12px;
  font-weight:600;
  text-transform:uppercase;
  letter-spacing:.6px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  background:linear-gradient(180deg,var(--accent-2),var(--accent));
  color:#fff;
  box-shadow:0 6px 18px rgba(30,111,216,0.12);
  transition:transform .08s ease,box-shadow .12s ease,opacity .12s ease;
}

.guesssubmit:active{
  transform:translateY(1px);
}

.guesssubmit[disabled]{
  opacity:.6;
  cursor:not-allowed;
  box-shadow:none;
}

.resultparas{
  margin-top:8px;
  background:rgba(235,245,255,0.6);
  padding:14px;
  border-radius:10px;
  border:1px solid rgba(30,111,216,0.04);
}

.resultparas p{
  margin:6px 0;
  font-size:0.95rem;
  color:#153049;
}

.resultparas .guesses{
  font-weight:600;
  color:#0b3f75;
}

.resultparas .lastresult{
  font-weight:700;
  color:var(--accent);
}

.loorhi h2{
  margin:8px 0 0 0;
  font-size:1.05rem;
  font-weight:700;
  color:var(--accent);
  text-align:left;
}

#resetBtn{
  margin-top:14px;
  display:inline-block;
  padding:10px 14px;
  border-radius:10px;
  border:1px solid rgba(30,111,216,0.14);
  background:transparent;
  color:var(--accent);
  font-weight:700;
  cursor:pointer;
  transition:background .12s ease,transform .06s ease,box-shadow .12s ease;
}

#resetBtn:hover{
  background:rgba(59,130,246,0.06);
}

#resetBtn:active{
  transform:translateY(1px);
}

@media (max-width:480px){
  .wrapper{
    margin:4vh 12px;
    padding:18px;
  }

  .guesssubmit{
    flex:0 0 100px;
    padding:10px;
    font-size:.9rem;
  }

  .resultparas{
    padding:12px;
  }
}

.visually-hidden{
  position:absolute!important;
  height:1px;
  width:1px;
  overflow:hidden;
  clip:rect(1px,1px,1px,1px);
  white-space:nowrap;
}
