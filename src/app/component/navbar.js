import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><Image src="/assets/img/Wandering_Witch_logo.webp.png" width={180} height={70}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">หน้าหลัก</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">เกี่ยวกับ</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    เพิ่มเติม
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="https://myanimelist.net/anime/40571/Majo_no_Tabitabi"target="_blank">Majo no Tabitabi</a></li>
                    <li><a className="dropdown-item" href="https://hareshi.net/browse/anime/112609/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%94-majo-no-tabitabi-elaina-elainas-reise" target="_blank">ช่องทางการรับชมเเบบถูกลิขสิทธิ์</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%94" target="_blank">Wiki</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <div className="d-flex">
              <Link href="/signup" className="btn btn-outline-primary mx-2 fs-5">
                SignUp
              </Link>
              <Link href="/signin"className="btn btn-outline-success mx-2 fs-5">
                SignIn
              </Link>
            </div>
            </div>
        </div>
        </nav>
    )
};