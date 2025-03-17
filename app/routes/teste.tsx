// app/routes/pdf-notes-manager.jsx
import { Link } from "remix";

export default function PdfNotesManager() {
    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                {/* Header with project name */}
                <div className="border-b border-gray-200 p-4">
                    <input
                        type="text"
                        placeholder="Name of the project"
                        className="text-xl font-semibold w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                    />
                </div>

                {/* Main content area */}
                <div className="flex flex-col md:flex-row h-[calc(100vh-120px)]">
                    {/* Left sidebar - PDF files list */}
                    <div className="w-full md:w-1/4 border-r border-gray-200 p-4 overflow-y-auto">
                        <h2 className="text-lg font-semibold mb-4">List of PDF files</h2>
                        <ul className="space-y-2">
                            {["Project Proposal.pdf", "Financial Report.pdf", "Meeting Minutes.pdf", "Technical Specs.pdf", "User  Research.pdf"].map((file) => (
                                <li key={file} className="p-2 rounded cursor-pointer hover:bg-gray-100 transition">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>{file}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <button className="flex items-center text-blue-600 hover:text-blue-800">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                <span>Upload PDF</span>
                            </button>
                        </div>
                    </div>

                    {/* Middle section - PDF preview */}
                    <div className="w-full md:w-1/2 p-4 overflow-y-auto">
                        <h2 className="text-lg font-semibold mb-4">Selected PDF file preview</h2>
                        <div className="bg-gray-100 rounded-lg border border-gray-200 h-full flex flex-col items-center justify-center p-4">
                            <div className="w-full max-w-md bg-white shadow-md rounded-md overflow-hidden">
                                <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between">
                                    <span>Project Proposal.pdf</span>
                                    <div className="flex space-x-2">
                                        <button className="p-1 hover:bg-blue-700 rounded">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </button>
                                        <button className="p-1 hover:bg-blue-700 rounded">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="text-center text-lg font-bold mb-4">Project Proposal</div>
                                    <div className="space-y-3">
                                        <p className="text-sm text-gray-700">
                                            <strong>Executive Summary:</strong> This proposal outlines our approach to developing a new customer relationship management system that will streamline operations and improve customer satisfaction.
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            <strong>Objectives:</strong> Increase efficiency by 30%, reduce customer response time by 50%, and integrate with existing systems.
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            <strong>Timeline:</strong> The project will be completed in three phases over a six-month period, with the first deliverable expected within 8 weeks of project initiation.
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            <strong>Budget:</strong> The estimated budget for this project is $120,000, including all development, testing, and implementation costs.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-100 px-4 py-2 text-center text-sm text-gray-500">
                                    Page 1 of 5
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right sidebar - Notes */}
                    <div className="w-full md:w-1/4 border-l border-gray-200 flex flex-col">
                        {/* Add notes section */}
                        <div className="p-4 border-b border-gray-200">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center">
                                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                <span>Add Notes</span>
                            </button>
                        </div>

                        {/* List of created notes */}
                        <div className="p-4 overflow-y-auto flex-grow">
                            <h2 className="text-lg font-semibold mb-4">List of created notes</h2>
                            <div className="space-y-3">
                                {/* Example note */}
                                <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-medium text-sm">Budget concerns</span>
                                        <div className="flex space-x-1">
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                </svg>
                                            </button>
                                            <button className="text-gray-500 hover:text-gray-700">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600">Need to review the budget estimates. $120k seems high for the scope.</p>
                                    <div className="mt-2 text-xs text-gray-500">Page 1 • 2 days ago</div>
                                </div>
                                {/* Additional notes can be added here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}