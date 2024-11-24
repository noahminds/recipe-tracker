import { useState } from 'react';
import { TextField } from './inputFields';

interface ModalProps {
    curr_image: string | null;
    onModalSubmit: (input: string) => void;
}

export default function ImageUploadModal({ curr_image, onModalSubmit }: ModalProps) {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState('');
    const [uploaded, setUploaded] = useState(false);

    // Helper function to toggle the modal
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <section
                id="image-upload"
                className="flex items-center gap-x-4">
                <button
                    id="upload-image"
                    type="button"
                    className="border px-2 rounded-full shadow-sm bg-blue-500 text-white"
                    onClick={toggleModal}
                >
                    (Optional) {curr_image && curr_image.trim() !== '' ? 'Replace Image' : 'Upload Image'}
                </button>
                {uploaded && (
                    <div className="text-green-500 text-xs text-center">New image uploaded!</div>
                )}
            </section>
            {modal && (
                <section
                    id="modal"
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div
                        id="overlay"
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={toggleModal}
                    ></div>
                    <div
                        id="modal-content"
                        className="relative bg-white pt-8 px-8 pb-3 rounded-lg shadow-lg z-10 w-1/2"
                    >
                        <button
                            id="close-modal"
                            className="absolute top-2 text-sm right-2 px-2 py-1 bg-gray-500 text-white rounded"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                        <div className="flex flex-col mt-4">
                            <TextField
                                field="image-address"
                                value={image}
                                onChange={setImage}
                                className="text-base"
                            />
                            <div className="flex justify-center">
                                <button
                                    id="upload-image"
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={() => {
                                        if (image.trim() != '') {
                                            onModalSubmit(image);
                                            setUploaded(true);
                                            toggleModal();
                                        }
                                    }}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}