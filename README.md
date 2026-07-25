# GitHub Pages 이력서 사이트

HTML, CSS, JavaScript만 사용하는 정적 이력서·포트폴리오 템플릿입니다.

## 1. 저장소 만들기

GitHub 사용자 이름이 `example`이라면 저장소 이름을 정확히 아래처럼 만드세요.

```text
example.github.io
```

권장 설정:

- Public
- Add a README file: 선택해도 무방
- `.gitignore`: None
- License: 선택 사항

## 2. 파일 올리기

이 압축 파일 안의 다음 파일과 폴더를 저장소 최상단에 올립니다.

```text
index.html
styles.css
script.js
assets/
```

GitHub 웹 화면에서 작업한다면:

1. 저장소의 `Add file`
2. `Upload files`
3. 파일을 드래그
4. `Commit changes`

## 3. GitHub Pages 켜기

저장소에서:

1. `Settings`
2. 왼쪽 `Pages`
3. `Build and deployment`
4. Source: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/ (root)`
7. `Save`

주소는 다음 형식입니다.

```text
https://YOUR_GITHUB_ID.github.io/
```

## 4. 반드시 바꿀 곳

VS Code의 전체 검색(`Ctrl + Shift + F`)으로 아래 문구를 검색해 교체하세요.

```text
YOUR_GITHUB_ID
YOUR_EMAIL@example.com
프로젝트 이름
학교명 · 전공
교육 또는 활동명
```

그리고 다음 내용을 실제 정보로 수정하세요.

- 첫 화면 소개 문장
- About 소개
- 대표 프로젝트
- 학력·교육·수상
- 기술별 실제 사용 범위
- GitHub, 영상, 기술 문서 링크

## 5. 프로젝트 이미지 넣기

이미지를 아래 폴더에 넣습니다.

```text
assets/images/
```

권장 파일명:

```text
project-01.webp
project-02.webp
```

`index.html`에서 각 프로젝트의 아래 부분을 찾습니다.

```html
<div class="project-visual project-visual--one">
  <span>PROJECT IMAGE 01</span>
</div>
```

다음처럼 바꿉니다.

```html
<div class="project-visual project-visual--one">
  <img src="./assets/images/project-01.webp" alt="프로젝트 플레이 화면" />
</div>
```

이미지는 가능하면 WebP 형식, 가로 1400px 안팎, 500KB 이하를 권장합니다.

## 6. PDF 이력서 추가

PDF 파일을 다음 위치에 넣습니다.

```text
assets/resume.pdf
```

그 뒤 `index.html`에서 `이력서 PDF` 버튼을 감싼 HTML 주석을 제거합니다.

## 7. 로컬에서 확인

가장 간단한 방법:

- VS Code에서 `index.html` 열기
- Live Server 확장 설치
- 우클릭 → `Open with Live Server`

또는 Python이 설치되어 있다면 프로젝트 폴더에서:

```bash
python -m http.server 8000
```

브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:8000
```

## 8. 업데이트 방법

파일을 수정한 뒤 GitHub에 커밋하면 Pages 사이트도 다시 배포됩니다.

Git 명령어를 사용할 경우:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 추천 작성 원칙

- 프로젝트마다 핵심 문장 1개
- 담당 기능 3~5개
- 문제 → 원인 → 해결 → 결과 순서
- 기술 스택은 실제 사용 범위까지 기재
- 프로젝트는 완성도 높은 순서로 배치
- 긴 자기소개보다 구현 결과와 근거를 우선
