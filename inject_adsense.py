import os

adsense_script = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3083296102953963" crossorigin="anonymous"></script>'

def inject_adsense(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Avoid duplicate injection
    if 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' in content:
        print(f"Skipping {file_path}: AdSense already present.")
        return

    # Inject after <head> tag
    new_content = content.replace('<head>', f'<head>\n    {adsense_script}')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Injected into {file_path}")

def main():
    # Root index.html
    if os.path.exists('index.html'):
        inject_adsense('index.html')
    
    # HTML files in public/ and its subdirectories
    for root, dirs, files in os.walk('public'):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                inject_adsense(file_path)

if __name__ == "__main__":
    main()
