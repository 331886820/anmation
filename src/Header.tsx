import { Avatar, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Header({ fps }: { fps: number }): JSX.Element {
  return (
    <header className="header">
      <div className="header-item" style={{ justifyContent: "flex-start" }}>
        <Avatar
          alt="jemmy"
          src="/logo.png"
          sx={{
            width: 36,
            height: 36,
            marginRight: ".5rem",
            transition: "transform 2s ease-in-out",
            "&:hover": {
              transform: "rotate(360deg)",
            },
          }}
        />
        <h2>Jemmy</h2>
      </div>

      <div className="header-item">
        <p>FPS: {fps}</p>
      </div>
      <div className="header-item" style={{ justifyContent: "flex-end" }}>
        <IconButton
          aria-label="download"
          color="primary"
          href="https://gpt.gudiaoxia.com/_next/static/media/pay.4a1e8bb7.png"
          target="_blank"
        >
          打赏<FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </div>
    </header>
  )
}

export default Header
