# GitHub Pages 배포 안내

이 사이트는 **HTML/CSS/JS만** 사용하며, `index.html`과 **`css/`**, **`js/`**는 모두 **상대 경로**로 연결되어 있습니다. 리포지토리 이름이 URL 경로에 붙는 `https://사용자명.github.io/레포이름/` 형태에서도 별도의 `<base href>` 설정 없이 동작합니다.

## 로컬에서 미리보기

프로젝트 루트(`index.html`이 있는 폴더)에서 정적 서버를 실행합니다.

- 예: `npx --yes serve .` 후 안내 URL 접속
- 또는 VS Code **Live Server**로 `index.html` 열기

## GitHub Pages 설정

1. GitHub에서 저장소 **Settings → Pages**로 이동합니다.
2. **Build and deployment**에서 소스를 선택합니다.
   - **`Deploy from a branch`**: `main`(또는 기본 브랜치)의 **`/(root)`** — 현재처럼 루트에 `index.html`이 있으면 이 방식이 가장 단순합니다.
   - **`/docs` 폴더**를 쓰려면 `index.html`, `css/`, `js/`를 `docs/` 아래로 옮기고, Pages 소스를 **`/docs`**로 지정합니다.
3. 저장 후 몇 분 뒤 `https://사용자명.github.io/저장소이름/` 에서 확인합니다.

## 수정 시

- 본문은 [자기소개서-의상디자이너.md](자기소개서-의상디자이너.md)를 원본으로 두고, 웹에 반영할 때 `index.html` 해당 섹션을 같이 고칩니다.
