// React
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
    { name: 'Info', href: '#info' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' }
];

function Header() {
    return (
        <Disclosure as='nav'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <img
                                src={require('../assets/signature.png')}
                                className='h-8'
                                alt='signature'
                            />
                            <div className='absolute inset-y-0 right-0 flex items-center'>
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel>
                        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-2 pb-3 space-y-1'>
                            {navigation.map(item => (
                                <Disclosure.Button
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className='text-gray-600  hover:bg-gray-300 hover:text-white block px-1 py-2 rounded-md text-base font-medium'>
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Header;
