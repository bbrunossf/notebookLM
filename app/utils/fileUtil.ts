// src/utils/fileUtil.ts
import fs from 'fs';
import path from 'path';

/**
 * Lista todos os arquivos PDF em um diretório específico.
 * @param dir - O diretório a ser listado.
 * @returns Uma Promise que resolve para uma lista de arquivos PDF.
 */
export const listPdfFiles = async (dir: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                return reject(err);
            }
            // Filtra apenas arquivos .pdf
            const pdfFiles = files.filter(file => file.endsWith('.pdf'));
            resolve(pdfFiles);
        });
    });
};

/**
 * Verifica se um arquivo existe.
 * @param filePath - O caminho do arquivo a ser verificado.
 * @returns Uma Promise que resolve para um booleano indicando a existência do arquivo.
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
    return new Promise((resolve) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    });
};