"""Create a photographic alpha matte; never synthesize or retouch the person."""
from PIL import Image
from rembg import remove, new_session

source = Image.open('public/images/randell.jpg').convert('RGB')
source.thumbnail((1800, 2400), Image.Resampling.LANCZOS)
result = remove(source, session=new_session('isnet-general-use'),
                alpha_matting=True, alpha_matting_foreground_threshold=240,
                alpha_matting_background_threshold=15,
                alpha_matting_erode_size=6)
result.save('public/images/randell-cutout.png')
background = Image.new('RGBA', result.size, '#101014')
background.alpha_composite(result)
background.convert('RGB').save('portrait-cutout-check.jpg', quality=95)
print('Created cutout', result.size)
