$ErrorActionPreference = 'Stop'

$aboutPath = Join-Path (Get-Location) 'src/components/About.tsx'
$heroPath = Join-Path (Get-Location) 'src/components/Hero.tsx'

if (!(Test-Path $aboutPath)) { throw "Run this script from the iconstruction-main project root; About.tsx was not found." }
if (!(Test-Path $heroPath)) { throw "Hero.tsx was not found. Nothing else was changed." }

$about = Get-Content $aboutPath -Raw
$aboutOld = 'src="/assets/products/beirutwhite.jpeg"'
$aboutNew = 'src="/assets/projects/about-interior.jpg"'
if ($about.Contains($aboutOld)) {
  $about = $about.Replace($aboutOld, $aboutNew)
  Set-Content -Path $aboutPath -Value $about -Encoding utf8
} elseif (!$about.Contains($aboutNew)) {
  throw "Could not find the expected image path in About.tsx. No About.tsx change was made."
}

$hero = Get-Content $heroPath -Raw
$heroOld = "'/assets/products/cosmopolitancrystal.jpeg'"
$heroNew = "'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920'"
if ($hero.Contains($heroOld)) {
  $hero = $hero.Replace($heroOld, $heroNew)
  Set-Content -Path $heroPath -Value $hero -Encoding utf8
} elseif (!$hero.Contains($heroNew)) {
  Write-Warning 'The Hero background path did not match the expected current value; Hero.tsx was left unchanged.'
}

Write-Host 'Photo paths restored. Gallery images and About image are now local files under public/assets/projects.' -ForegroundColor Green
