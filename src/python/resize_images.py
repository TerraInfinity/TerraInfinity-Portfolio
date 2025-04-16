from PIL import Image
import os
import sys

def resize_to_16_9(image_path, output_path):
    try:
        with Image.open(image_path) as img:
            original_width, original_height = img.size
            aspect_ratio = 16/9
            
            print(f"Original dimensions: {original_width}x{original_height}")
            
            # Calculate new dimensions while maintaining 16:9 ratio
            if original_width/original_height > aspect_ratio:
                # Image is wider than 16:9, scale down
                new_height = int(original_width / aspect_ratio)
                new_width = original_width
                print(f"Scaling down to {new_width}x{new_height}")
            else:
                # Image is taller than 16:9, scale up
                new_width = int(original_height * aspect_ratio)
                new_height = original_height
                print(f"Scaling up to {new_width}x{new_height}")
            
            # Resize the image
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save the resized image
            img.save(output_path, 'JPEG')
            print(f"Saved to {output_path}")
            
    except Exception as e:
        print(f"Error processing {image_path}: {str(e)}")
        raise

def process_images(input_folder, output_folder):
    try:
        print(f"Input folder: {input_folder}")
        print(f"Output folder: {output_folder}")
        
        # Create output folder if it doesn't exist
        os.makedirs(output_folder, exist_ok=True)
        
        # Process all JPEG files
        files = os.listdir(input_folder)
        print(f"Found {len(files)} files in input folder")
        
        for filename in files:
            if filename.lower().endswith(('.jpg', '.jpeg')):
                input_path = os.path.join(input_folder, filename)
                output_path = os.path.join(output_folder, filename)
                print(f"\nProcessing {filename}...")
                print(f"Input path: {input_path}")
                print(f"Output path: {output_path}")
                resize_to_16_9(input_path, output_path)
                
    except Exception as e:
        print(f"Error in process_images: {str(e)}")
        raise

if __name__ == "__main__":
    # Example usage
    input_folder = "../../public/images/projects/crystal-cloud-podcast/old"  # Change this to your input folder
    output_folder = "../../public/images/projects/crystal-cloud-podcast/resized"  # Change this to your desired output folder
    print("\nStarting image processing...")
    process_images(input_folder, output_folder)
    print("\nProcessing complete!")