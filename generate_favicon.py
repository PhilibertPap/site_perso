#!/usr/bin/env python3
"""
Script pour générer un favicon.ico et apple-touch-icon.png à partir de images/profile/photo.jpeg
Requiert Pillow : pip install pillow
"""
from PIL import Image
import os

def create_favicon(input_path, output_ico_path, output_png_path):
    """Crée un favicon.ico (32x32, 16x16) et une icône Apple (180x180)"""
    try:
        with Image.open(input_path) as img:
            # Créer favicon.ico avec plusieurs tailles
            img.save(output_ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
            
            # Créer apple-touch-icon.png (180x180)
            img_resized = img.resize((180, 180), Image.LANCZOS)
            img_resized.save(output_png_path, format='PNG')
            
            print(f"✅ Favicon généré : {output_ico_path}")
            print(f"✅ Apple touch icon généré : {output_png_path}")
            return True
    except Exception as e:
        print(f"❌ Erreur : {e}")
        return False

if __name__ == "__main__":
    input_image = "images/profile/photo.jpeg"
    favicon_path = "favicon.ico"
    apple_icon_path = "apple-touch-icon.png"
    
    # Vérifier que l'image source existe
    if not os.path.exists(input_image):
        print(f"❌ Image source introuvable : {input_image}")
        print("Placez une image 'photo.jpeg' dans le dossier images/profile/")
        exit(1)
    
    # Générer les icônes
    success = create_favicon(input_image, favicon_path, apple_icon_path)
    
    if success:
        print("\n📝 Pour appliquer les changements :")
        print("1. Exécutez ce script : python generate_favicon.py")
        print("2. Les fichiers favicon.ico et apple-touch-icon.png seront créés")
        print("3. Vérifiez qu'ils apparaissent dans le dossier racine")
