'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="MERGEPDF">
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="SPLITPDF">
             </MenuItem>
            <MenuItem setActive={setActive} active={active} item="COMPRESSPDF">
             </MenuItem>
             <MenuItem setActive={setActive} active={active} item="CONVERTPDF">
             <table>
              <tr>
                <th>CONVERT TO PDF</th>
                <th>CONVERT FROM PDF</th>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">JPG to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to JPG</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">WORD to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to WORD</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">POWERPOINT to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to POWERPOINT</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">EXCEL to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to EXCEL</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">HTML to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to HTML</HoveredLink></td>
              </tr>
             </table>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="ALL PDF TOOLS">
              <tr>
                <th>ORGANIZE PDF</th>
                <th>OPTIMIZE PDF</th>
                <th>CONVERT TO PDF</th>
                <th>CONVERT FROM PDF</th>
                <th>EDIT PDF</th>
                <th>PDF SECURITY</th>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">Merge PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Compress PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">JPG to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to JPG</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Rotate PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Unlock PDF</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">SPlit PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Repair PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">WORD to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to WORD</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Add page numbers</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Protect PDF</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">Remove pages</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">OCR PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">POWERPOINT to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to POWERPOINT</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Add watermark</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Sign PDF</HoveredLink></td>
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">Extract pages</HoveredLink></td>
              <td></td>
              <td> <HoveredLink href="/web-dev">EXCEL to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to EXCEL</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">Edit PDF</HoveredLink></td>
              
              </tr>
              <tr>
              <td> <HoveredLink href="/web-dev">Organize PDF</HoveredLink></td>
              <td></td>
              <td> <HoveredLink href="/web-dev">HTML to PDF</HoveredLink></td>
              <td> <HoveredLink href="/web-dev">PDF to PDF/A</HoveredLink></td>
              
              
              </tr>
              
              <tr>
              <td> <HoveredLink href="/web-dev">Scan to PDF</HoveredLink></td>
              
              
              
              </tr>
              
             </MenuItem>
             
        </Menu>
        
       
       
    </div>
  )
};

export default Navbar;
